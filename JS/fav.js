
// Retrieve the favorites from localStorage and display them
function fetchFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favCard')) || [];

  const favoritesCon = document.getElementById('categoriescon');
  if (favorites.length === 0) {
    favoritesCon.innerHTML = '<p>No favorites yet .....</p>';
  } else {
    favoritesCon.innerHTML = favorites.map((category) => createFavoriteCardHTML(category)).join('');
  }
}

// Generate the HTML for each favorite card
function createFavoriteCardHTML(category) {
  return `
    <div class="content col-md-2 col-sm-6 ">
      <div class="item-container">
        <div class="item-img">
          <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-50">
          <a href="../recipedetails.html">
            <div class="hover-button">View Recipe</div>
          </a>
        </div>
        <div class="item-content">
          <a href="#"><small>${category.strCategory}</small></a>
          <p class="category-description m-auto ">${category.strCategoryDescription}</p>
        </div>
      </div>
    </div>
  `;
}

function clearFavorites(){
  localStorage.removeItem('favCard');
  const categoriescon = document.getElementById('categoriescon');
  categoriescon.innerHTML = '<p>No favorites yet .....</p>' ;
}
document.getElementById('clearFavoritesBtn').addEventListener('click' , clearFavorites);
// Initialize the favorites page
fetchFavorites();

