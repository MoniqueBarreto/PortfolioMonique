const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');


//open nav Menu

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

//close Nav Menu
const closeNav=() => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);


// close nav menu when menu items are clicked 

if(window.innerWidth < 1024) {
    document.querySelectorAll(".nav__menu li a ").forEach(navItem =>{
        navItem.addEventListener('click',closeNav)
    })
}

// change NavBar styles on scroll 
window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0);
})

