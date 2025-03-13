var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Each slide takes full width
    spaceBetween: 10, // Adds some spacing between slides
    loop: true, // Infinite loop
    speed: 1000, // Smooth transition (1 second)
    autoplay: {
        delay: 3000, // Auto slide every 3 seconds
        disableOnInteraction: false // Keeps autoplay working after manual swipe
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    grabCursor: true,
    spaceBetween: 0 // Enables scrolling with mousewheel
});
