
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1000: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        }




    }
});


/* Burger Menu */

const open = document.getElementById('open');
const menu = document.getElementById("menu");
const close = document.getElementById('close')
const link = document.querySelectorAll("#link");

const hide_video = document.getElementById('hide_video');
const vid = document.getElementById('vid')

hide_video.addEventListener('click', function () {
    vid.classList.add('db')
})

hide_video.addEventListener('click', function () {
    hide_video.classList.add('dn')
})

link.forEach(n => n.addEventListener('click', function () {
    menu.classList.remove('db')
}))

open.addEventListener('click', function () {
    menu.classList.add('db')
})

close.addEventListener('click', function () {
    menu.classList.remove('db')
})


AOS.init();

