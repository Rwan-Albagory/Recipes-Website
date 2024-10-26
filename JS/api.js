async function fetchCategories() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    renderCategories(data.categories.slice(0, 12));
  } 
  catch (error) {
    console.error('Error fetching the categories:', error);
  }
}

function renderCategories(categories) {
  const categoriesCon = document.getElementById('categoriescon');
  categoriesCon.innerHTML = categories.map((category, index) => createCategoryHTML(category, index)).join('');
  
  document.querySelectorAll('.favBtn').forEach(button => {
    button.addEventListener('click', handleFavoriteClick);
  });
}

function handleFavoriteClick(event) {
  const favBtn = event.currentTarget;
  favBtn.classList.toggle('active');
  
  if (favBtn.classList.contains('active')) {
    const favCard = JSON.parse(localStorage.getItem('favCard')) || [];
    const category = {
      idCategory: favBtn.dataset.id,
      strCategory: favBtn.dataset.category,
      strCategoryThumb: favBtn.dataset.thumb,
      strCategoryDescription: favBtn.dataset.description
    };
    favCard.push(category);
    localStorage.setItem('favCard', JSON.stringify(favCard));
  }
  else {
  }
  
  window.location.href = 'fav.html';
}



function createCategoryHTML(category) {
  return `
    <div class="content col-md-2 col-sm-6 col-xs-12 ">
      <div class="item-container">
        <div class="item-img">
          <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-50">
          <a href="../recipedetails.html">
            <div class="hover-button">View Recipe</div>
          </a>
          <i id="icon" class="fa-regular fa-star favBtn" data-id="${category.idCategory}" data-category="${category.strCategory}" data-thumb="${category.strCategoryThumb}" data-description="${category.strCategoryDescription}"></i>
        </div>
        <div class="item-content">
          <a href="../recipedetails.html"><small>${category.strCategory}</small></a>
          <p id="text" class="category-description m-auto ">${category.strCategoryDescription}</p>
        </div>
      </div>
    
    </div>
  `;
}

fetchCategories();
