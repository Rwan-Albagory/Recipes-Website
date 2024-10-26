// click on card of recipe type to get name of category
let allRecipeTypes = document.querySelector(".recipe-type .row");
// console.log(allRecipeTypes);
let nameCategory = "";

document.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-name")) {
    console.log(e.target.getAttribute("data-name"));
    nameCategory = e.target.getAttribute("data-name");
    localStorage.setItem("name-category", nameCategory);
    window.location.href = "recipe-type.html";
  }

  // console.log(e.target.parentElement);
});



// ingredient
async function getIngredients() {
  try {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    let finalRes = await response.json();
    // console.log(finalRes);
    // console.log(finalRes.meals[0].strIngredient);

    let slide1 = "";
    for (let i = 0; i < 6; i++) {
      let response2 = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${finalRes.meals[i].strIngredient}`
      );
      let finalRes2 = await response2.json();
      slide1 += `
        <div class="col-lg-2  col-md-4 col-6 ingredient-item " name-ing="ingredient-item" >
                            <div class="recipes-all d-flex align-items-center  justify-content-center flex-column">
                                <div class="recipes-img">
                                    <img src="img/${i}.png" alt="Chicken">
                                </div>
                                <div class="recipes-info py-4">
                                    <h4 class="name-ingredient">${finalRes.meals[i].strIngredient}</h4>
                                    <small>(${finalRes2.meals.length} recipes)</small>
                                </div>



                            </div>
                        </div>
      `;
    }

    document.querySelector(".Recipes-ngredients .row .row ").innerHTML = slide1;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector(".Recipes-ngredients .row .row").innerHTML =
      "<p>Error loading products</p>";
  }
}
getIngredients();

// recipe type (category)
async function getCategories() {
  try {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let finalRes = await response.json();
    // console.log(finalRes); //category

    let slide1 = "";
    for (let i = 0; i < Math.min(12, finalRes.categories.length); i++) {
      let response1 = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${finalRes.categories[i].strCategory}`
      );
      let finalRes1 = await response1.json();
      // console.log(finalRes1);
      let recipeCount = finalRes1.meals ? finalRes1.meals.length : 0;
      slide1 += ` 
        <div class="col-lg-2 col-md-2 col-md-4 col-sm-6">
          <div href="#" class="category text-center" data-name="${finalRes.categories[i].strCategory}">
            <div class="category-icon" data-name="${finalRes.categories[i].strCategory}">
              <img src="${finalRes.categories[i].strCategoryThumb}" alt="">
              <h4 class="recipe-name">${finalRes.categories[i].strCategory}</h4>
              <span>${recipeCount} Recipes</span>
            </div>
          </div>
        </div>
      `;
    }

    document.querySelector(".recipe-type .row").innerHTML = slide1;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector(".recipe-type .row").innerHTML =
      "<p>Error loading products</p>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getCategories();
});

// when click on any ingredients store name in local storage
document.addEventListener("click", (e) => {
  if (e.target.closest("[name-ing]")) {
    // custom attribute name-ing
    let ingredientItem = e.target.closest("[name-ing]");

    let ingredientName = ingredientItem.querySelector(".name-ingredient");

    if (ingredientName) {
      // console.log(ingredientName.innerHTML);

      // localStorage
      localStorage.setItem("name-Ingredient", ingredientName.innerHTML);
      window.location.href = "ingredients.html";
    }
  }
});




