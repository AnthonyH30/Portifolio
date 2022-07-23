const sideBar = document.querySelector('.sidebar');
const button = document.querySelector('.toggle-btn')
const menuButton = document.querySelector('.fa-arrow-right-to-bracket')

button.addEventListener('click', () =>{
    sideBar.classList.toggle('active');
    menuButton.classList.toggle('active-btn');
})