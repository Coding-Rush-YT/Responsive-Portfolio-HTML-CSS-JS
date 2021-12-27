var container = document.querySelector('.container')
var swipeToTop = document.querySelector('.scrollToTop')

function responsiveHeader() {
    var header = document.getElementById('header')
    if (header.className === "header" || header.className === 'header fixedHeader') {
        header.className += " responsive"
    } else {
        header.className = "header"
        if(window.scrollY > 150) {
            header.className = 'header fixedHeader'
        }
    }
}

// Fixed Header Functionality
window.addEventListener('scroll', e => {
    if(window.scrollY > 150) {
        swipeToTop.style.display = 'block'
        document.querySelector('.header').className = 'header fixedHeader'
    } else {
        document.querySelector('.header').className = 'header'
        swipeToTop.style.display = 'none'
    }
})

// TYPE IT
new TypeIt('#job', {
    speed: 80,
    loop: true
})
 .type("Full Stack Web Developer!")
 .pause(1500)
 .delete()
 .type("Android Developer")
 .pause(1000)
 .delete()
 .type("Programmer!")
 .pause(1000)
 .reset()
 .go()

// SWIPER JS CONFIGURATIONS
var swiper = new Swiper('.swipeReviews', {
    effect: 'coverflow',
    slidesPerView: 1.5,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 150
        }
    }
})

// Swipe To Top Functionality
swipeToTop.addEventListener('click',(e) => {
    window.scrollTo({
        top: 0
    })
})