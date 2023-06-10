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

//  ================== scroll reveal animation =====================

const sr = ScrollReveal({
    origin:"top",
    distance: '60px',
    duration: 3000,
    delay: 400,
    reset: true //animations repeat
})


// main page
sr.reveal(`.home_data,.home_card,.brand`,{delay:300})
sr.reveal(`.home_card_title,.brands`,{delay:300,origin:'left'})


// kawasaki page
sr.reveal(`.bike`,{delay:300})
sr.reveal(`.bike_brand`,{delay:300,origin:'right'})

//introduction bike
sr.reveal(`.intro_bike`,{delay:300})
sr.reveal(`.intro_text`,{delay:300,origin:'left'})

// detail bike
sr.reveal(`.third_topic,.engine_img`,{delay:300})
sr.reveal(`.main_h1,.main_img,.second_info,.third_engine`,{delay:300,origin:'left'})
sr.reveal(`.main_info,.second_img`,{delay:300,origin:'right'})

// bottom
sr.reveal(`.footer`,{delay:300,origin:'bottom'})


// sr.reveal(`.home_news_1,.home_news_2`,{delay:200,interval:150,origin:'right'})


// sr.reveal(`.home__data,.explore__data,.explore__user`)
// sr.reveal(`.home__card`,{delay:200,distance:'100px',interval:150})
// sr.reveal(`.about__data,.join__image`,{origin:'right'})
// sr.reveal(`.about__image,join__data`,{origin:'left'})
// sr.reveal(`.popular__card`,{interval:150})