const navMenu = document.getElementById('nav-menu')
const main = document.getElementById('main')
const navClose = document.getElementById('nav-close')
const navOpen = document.getElementById('nav-open')

if(navOpen){
    navOpen.addEventListener('click',()=>{
        navMenu.classList.add('show_menu')
        main.classList.add('main_blur')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
        main.classList.remove('main_blur')
    })
}

// =================== show scroll up ==============================

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY>=350? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)