const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const navBar= document.querySelector('.navbar')
const filter= document.querySelector('.filter')

openMenu.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
    openMenu.classList.remove('active')
    closeMenu.classList.add('active')
    filter.classList.toggle('active')
})


closeMenu.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
    openMenu.classList.add('active')
    closeMenu.classList.remove('active')
    filter.classList.toggle('active')
})