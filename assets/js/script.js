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
