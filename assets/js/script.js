// mobile menu
const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');


burgerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active')
});

let searchButton = document.querySelector('#search')
// Add an event listner to the button that runs the function sendApiRequest when it is clicked 
searchButton.addEventListener('click', ()=>{
    console.log('button pressed')
    sendApiRequest()
})

// fetch data function
async function sendApiRequest(){
  let APP_ID = '9f9d72f1'
  let API_KEY = '3813ab18f8120cb995cd2175c4202cb8'
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

// function will do something with the data received from API 
// add a card  and grab the image data from inspect dev
// add path to card title
// add url to button
function useApiData(data){
document.querySelector('#content').innerHTML = `
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${data.hits[0].recipe.image}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Cusine: ${data.hits[0].recipe.cuisineType}
    </p>
    <a href="${data.hits[0].recipe.url} id="recipieBtn" class="button is-success is-light is-outlined is-rounded is-centered mt-3">
      Go to recipie
    </a>
  </div>
</div>
`
}

