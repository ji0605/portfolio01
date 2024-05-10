mainSlide(); 
productSlide();

function mainSlide() {
    constSlide = new Swiper('.main-visual-slide', {
        loop: true,
        pagination: {
            el: '.main-visual-slide .page',
            clickable: true
          },
          navigation: {
            nextEl: '.main-visual-slide .arrows .prev',
            prevEl: '.main-visual-slide .arrows .next',
          },
    });

}

