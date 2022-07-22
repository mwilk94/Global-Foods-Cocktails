const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');
const searchForm = document.querySelector('form');
const resultContent = document.querySelector('#content');
const recipeAsian = document.querySelector('#recipeAsian');
const recipeCarib = document.querySelector('#recipeCarib');
const recipemiddleE = document.querySelector('#recipeMiddleE');
const container = document.querySelector('#container');
const recipeMexican = document.querySelector('#recipeMexican');
const drinkButton = document.querySelector('#drinkRecipes')
const APP_ID = '9f9d72f1';
const API_KEY = '3813ab18f8120cb995cd2175c4202cb8';
let searchValue = '';

//display cuisine
function generateHTMLcuisine(results) {
  let generateHTML = '';
  results.map(results => {
    generateHTML +=
      `
     <div class="card">
       <div class="card-image">
          <figure class="food-image is-4by2">
            <img src="${results.recipe.image}" alt="food image">
          </figure>
        </div>
        <div class="card-content">
          <h5 class="card-title"><strong>Recipe Name:</strong> ${results.recipe.label}</h5>
          <p class="car*d-text"><strong>Cuisine:</strong> ${results.recipe.cuisineType}
          </p>
              
          <a href="${results.recipe.url}" id="recipeBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
            Go to recipe
          </a>
        </div>
    </div>  
   `
  })

  resultContent.innerHTML = generateHTML;
}
//display cocktails from search
function generateHTMLcocktail(results) {
  let generateHTML = '';
  results.map(results => {
    generateHTML +=
    `
     <div class="card mt-6">
       <div class="card-image">
          <figure class="food-image is-4by2">
            <img src="${results.image}" alt="food image">
          </figure>
        </div>
    
        <div class="card-content">
          <h5 class="card-title"><strong>Recipe Name:</strong> ${results.title}</h5>
          
          <p class="car*d-text"><strong>Source:</strong>${results.sourceName}
          </p>
          <br>    
          <a href="${results.sourceUrl}" id="recipeBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
            Go to recipe
          </a>
        </div>
     </div>  
   `
  })

  resultContent.innerHTML = generateHTML;
}
//query for drink
async function drinkAPI() {
  const drinkUrl = `https://api.spoonacular.com/recipes/random?apiKey=cab7e9aedeef4bc6981a9aa8fa2dae2a&tags=drink&number=5`;
  let drinkResponse = await fetch(drinkUrl);
  console.log(drinkResponse)
  const drinkData = await drinkResponse.json();
  generateHTMLcocktail(drinkData.recipes);
  console.log(drinkData);
}
//query for recipe choice
async function caribAPI() {
  const caribUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Caribbean&mealType=Dinner&dishType=Main%20course
  `;
  let caribResponse = await fetch(caribUrl);
  console.log(caribResponse)
  const caribData = await caribResponse.json();
  generateHTMLcuisine(caribData.hits);
  console.log(caribData);
}

async function middleEAPI() {
  const middleEUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Middle%20Eastern&mealType=Dinner&dishType=Main%20course`;

  let middleEResponse = await fetch(middleEUrl);
  console.log(middleEResponse)
  const middleEData = await middleEResponse.json();
  generateHTMLcuisine(middleEData.hits);
  console.log(middleEData);
}

async function mexEAPI() {
  const mexUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Mexican&mealType=Dinner&dishType=Main%20course
  `;

  let mexResponse = await fetch(mexUrl);
  console.log(mexResponse)
  const mexData = await mexResponse.json();
  generateHTMLcuisine(mexData.hits);
  console.log(mexData);
}

async function asiaAPI() {
  const asiaUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Asian&mealType=Dinner&dishType=Main%20course
  `;
  let asiaResponse = await fetch(asiaUrl);
  console.log(asiaResponse)
  const asiaData = await asiaResponse.json();
  generateHTMLcuisine(asiaData.hits);
  console.log(asiaData);
}

async function fetchAPI() {
  const baseUrl = `https://api.edamam.com/search?q=?${searchValue}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=30`;
  let response = await fetch(baseUrl);
  const data = await response.json();
  generateHTMLcuisine(data.hits);
  console.log(data);
}
// burger Icon for mobile
burgerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active')
});
// dinner recipes for different cuisines - Middle Eastern
recipeMiddleE.addEventListener('click', (e) => {
  e.preventDefault();
  middleEAPI()
})
// search input function 
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchValue = e.target.querySelector('.input').value;
  storeSearchResults(searchValue);
  fetchAPI();
});
// dinner recipes for different cuisines - Asian
recipeAsian.addEventListener('click', (e) => {
  e.preventDefault();
  asiaAPI()
})
// dinner recipes for different cuisines - Mexican
recipeMexican.addEventListener('click', (e) => {
  e.preventDefault();
  mexEAPI()
})
// dinner recipes for different cuisines - caribbean
recipeCarib.addEventListener('click', (e) => {
  e.preventDefault();
  caribAPI()
})
drinkButton.addEventListener('click', (e) => {
  e.preventDefault();
  drinkAPI()
}) 

// local storage
function storeSearchResults (query) {
  localStorage.setItem('foodSearch', JSON.stringify(query))
}