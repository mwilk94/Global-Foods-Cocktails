// mobile menu
const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');

// burger Icon for mobile
burgerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active')
});

// declared variables
const searchForm = document.querySelector('form');
const resultContent = document.querySelector('#content');
const container = document.querySelector('#container');
let searchValue = '';
let APP_ID = '9f9d72f1';
let API_KEY = '3813ab18f8120cb995cd2175c4202cb8';

// dinner recipes for different cuisines - Asian

let recipeAsian = document.querySelector('#recipeAsian')
recipeAsian.addEventListener('click', (e) => {
e.preventDefault();
 asiaAPI()
})

async function asiaAPI(){
  const asiaUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Asian&mealType=Dinner&dishType=Main%20course
  `;
  let asiaResponse = await fetch(asiaUrl);
  console.log(asiaResponse)
  const asiaData = await asiaResponse.json();
  generateHTML(asiaData.hits);
  console.log(asiaData);
}


function generateHTML(asiaCuisineType) {
  let generateHTML = '';
  asiaCuisineType.map(() => {
    generateHTML +=
    `<div class="card">
      <div class="card-image">
        <figure class="food-image is-4by2">
          <img src="${results.recipe.image}" alt="food image">
        </figure>
      </div>
      <div class="card-content">
        <h5 class="card-title">${results.recipe.label}</h5>
        <p class="card-text">Cuisine: ${results.recipe.cuisineType}
        </p>  
        <a href="${results.recipe.url} id="recipeBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
          Go to Recipe
        </a>
      </div>
    </div>  `
  })
  
  resultContent.innerHTML = generateHTML;
}


// dinner recipes for different cuisines - caribbean
let recipeCarib = document.querySelector('#recipeCarib')
recipeCarib.addEventListener('click', (e) => {
e.preventDefault();
 caribAPI()
})

async function caribAPI(){
  const caribUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Caribbean&mealType=Dinner&dishType=Main%20course
  `;
  let caribResponse = await fetch(caribUrl);
  console.log(caribResponse)
  const caribData = await caribResponse.json();
  generateHTML(caribData.hits);
  console.log(caribData);
}

function generateHTML(caribCuisineType) {
  let generateHTML = '';
  caribCuisineType.map(() => {
    generateHTML +=
    `<div class="card">
      <div class="card-image">
        <figure class="food-image is-4by2">
          <img src="${results.recipe.image}" alt="food image">
        </figure>
      </div>
      <div class="card-content">
        <h5 class="card-title">${results.recipe.label}</h5>
        <p class="card-text">Cuisine: ${results.recipe.cuisineType}
        </p>  
        <a href="${results.recipe.url} id="recipieBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
          Go to recipie
        </a>
      </div>
    </div>  `
  })

  resultContent.innerHTML = generateHTML;
}


// dinner recipes for different cuisines - Middle Eastern

let recipemiddleE = document.querySelector('#recipeMiddleE')
recipeMiddleE.addEventListener('click', (e) => {
e.preventDefault();
 middleEAPI()
})

async function middleEAPI(){
  const middleEUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Middle%20Eastern&mealType=Dinner&dishType=Main%20course`;

  let middleEResponse = await fetch(middleEUrl);
  console.log(middleEResponse)
  const middleEData = await middleEResponse.json();
  generateHTML(middleEData.hits);
  console.log(middleEData);
}


function generateHTML(middleECuisineType) {
  let generateHTML = '';
  middleECuisineType.map(() => {
    generateHTML +=
    `<div class="card">
      <div class="card-image">
        <figure class="food-image is-4by2">
          <img src="${results.recipe.image}" alt="food image">
        </figure>
      </div>
      <div class="card-content">
        <h5 class="card-title">${results.recipe.label}</h5>
        <p class="card-text">Cuisine: ${results.recipe.cuisineType}
        </p>  
        <a href="${results.recipe.url} id="recipieBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
          Go to recipie
        </a>
      </div>
    </div>  `
  })
  
  resultContent.innerHTML = generateHTML;
}

// dinner recipes for different cuisines - Mexican

let recipeMexican = document.querySelector('#recipeMexican')
recipeMexican.addEventListener('click', (e) => {
e.preventDefault();
 mexEAPI()
})

async function mexEAPI(){
  const mexUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=9f9d72f1&app_key=3813ab18f8120cb995cd2175c4202cb8&cuisineType=Mexican&mealType=Dinner&dishType=Main%20course
  `;
  
  let mexResponse = await fetch(mexUrl);
  console.log(mexResponse)
  const mexData = await mexResponse.json();
  generateHTML(mexData.hits);
  console.log(mexData);
}


function generateHTML(mexCuisineType) {
  let generateHTML = '';
  mexCuisineType.map(() => {
    generateHTML +=
    `<div class="card">
      <div class="card-image">
        <figure class="food-image is-4by2">
          <img src="${results.recipe.image}" alt="food image">
        </figure>
      </div>
      <div class="card-content">
        <h5 class="card-title">${results.recipe.label}</h5>
        <p class="card-text">Cuisine: ${results.recipe.cuisineType}
        </p>  
        <a href="${results.recipe.url} id="recipieBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
          Go to recipe
        </a>
      </div>
    </div>  `
  })
  
  resultContent.innerHTML = generateHTML;
}

// search input function 
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchValue = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI () {
  const baseUrl = `https://api.edamam.com/search?q=?${searchValue}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=20`;
  let response = await fetch(baseUrl);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
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

          <h5 class="card-title">${results.recipe.label}</h5>
          
          <p class="card-text">Cuisine: ${results.recipe.cuisineType}
          </p>
              
          <a href="${results.recipe.url} id="recipeBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
            Go to recipe
          </a>
        </div>
    </div>  
   `
  })

  resultContent.innerHTML = generateHTML;
}


//  Google map API
function initMap(){
        // map options
        var options ={
            center: { lat:  42.361145, lng:-71.057083},
            zoom:8
        }
        // new map
         map =new google.maps.Map(document.getElementById('map'), options);
        // Add marker
        // var marker =new google.maps.Marker({
        //     position:{lat: 42.361145, lng:-71.057083},
        //     map:map,
        //     icon: "https://img.icons8.com/nolan/2x/marker.png"

        function addMarker(property){
              const marker = new google.maps.Marker({
                    position: property.location,
                    map:map,
                    icon: property.imageIcon

              });

}
 addMarker({ location:{lat:  42.361145, lng:-71.057083},
imageIcon: "https://img.icons8.com/nolan/2x/marker.png"});
 addMarker({ location:{lat: 13.909444, lng: -60.978893},
  imageIcon: "https://img.icons8.com/nolan/2x/marker.png"});
 addMarker({ location:{lat: 38.5411, lng: -0.1225}});
         

 }







      

    