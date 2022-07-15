// mobile menu
const burgerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active')
});

let searchButton = document.querySelector("#search")
// Add an event listner to the button that runs the function sendApiRequest when it is clicked 
searchButton.addEventListener("click", ()=>{
    console.log(" button pressed")
    sendApiRequest()
})

// An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let APP_ID = "832e4ade"
    let API_KEY = "e855187a6df8032952ebf772be225924"
    let response =await fetch('https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`');
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

// function that does something with the data received from the API. The name of the function should be
// customized 
function useApiData(data){
  document.querySelector("#content").innerHTML = `
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${data.hits[0]).recipe.image}"alt="Placeholder image">;
    </figure>

    <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.<a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>

      <div class="media-content">
          <h5 class= "title is-4">${data.hits[0].recipe.label}</h5>
          <p class="card-text"> Source: ${data.hits[0].recipe.source}</p>
          <a href="${data.hits[0].recipe.url}" class="content">sometext</a>
        </div>
    </div>
    </div>
` </div>
   
}