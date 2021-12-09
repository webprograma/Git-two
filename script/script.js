$('.ak2__btn').click(() => {
    if ($('.ak2__btn').html().trim() == 'Показать еще 9😎 видео') {
        $('.ak2__btn').html('Закрой окно')
        $('.ak2__blockn').show()
    } else if ($('.ak2__btn').html() == 'Закрыть окно') {
        $('.ak2__btn').html('Показать еще 9😎 видео')
        $('.ak2__blockn').hide()
    }
})

$('.ak3__item-go').click(() => {
    if ($('.ak3__item-go').html().trim() == 'смотреть галерею') {
        $('.ak3__item-go').html('Закрить Галерею')
        $('.ak3__none').addClass('active')
    } else if ($('.ak3__item-go').html().trim() == 'Закрить Галерею')

    {
        $('.ak3__item-go').html('смотреть галерею')
        $('.ak3__none').removeClass('active')
    }
})
let like = document.querySelectorAll('.ak4__ico');

like.forEach((el) => {
    el.addEventListener('dblclick', (e) => {
        el.style.color = 'red'
    })
})
like.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.style.color = 'white'
    })
})

// for (let j = 0; j < like.length; j++) {
//     like[j].addEventListener('click', function () {
//         for (let i = 0; i < like.length; i++) {
//             like[i].classList.remove('active')
//         }
//         like[j].classList.add('active')
//     })

// }

$('.ak4__link').click((e) => {
    $('.ak4__link').removeClass('active')

    $(e.target).toggleClass('active')

    $('.ak__filter').css({
        'display': 'none'
    })

    $(`.ak__filter[ data-filter=${$(e.target).attr('data-target')}]`).css({
        'display': 'block'
    })

})

   



function type(text, speed) {
    let title = text.html()
    let collector = ''
    let integer = 0

    let stopInterval = setInterval(() => {
        if (collector === title) {
            return clearInterval(stopInterval)
        }
        collector += title[integer]
        text.html(collector)
        integer++


    }, speed);

}
type($('.type__text2'), 40)
type($('.type__text'), 40)
type($('.zamer__text'), 20)
type($('.sogs__text'), 20)



const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
    },
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


let accBtn = document.querySelectorAll('.ak8__icons');
let accView = document.querySelectorAll('.ak8__position');


for (let i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', function() {
        let att = this.getAttribute('data-num')
        this.classList.toggle('active')
        accView[att].classList.toggle('active')
    })
    
}

