$('.al1__btn').click(() => {
  if ($('.al1__btn').html() == 'Показать еще 21 кухонь') {
    $('.al1__btn').html('Закрыть кухонь')
    $('.ali__item').addClass('active')
  } else if ($('.al1__btn').html() == 'Закрыть кухонь') {
    $('.al1__btn').html('Показать еще 21 кухонь')
    $('.ali__item').removeClass('active')
  }
})

let folderIcon = document.querySelector('.fa-folder')
let blockItem = document.querySelector('.block__item')
let heartIcon = document.querySelectorAll('.model__icon')
let aliProektBtn = document.querySelector('.al1__proekt-button')
let aliProektBtn2 = document.querySelector('.al1__proekt-button2')
let aliProektBtn3 = document.querySelector('.al1__proekt-button3')
let pryamoy = document.querySelector('.pryamoy__row')
let uglovoy = document.querySelector('.uglovoy__row')
let obrazniy = document.querySelector('.obrazniy__row')
let videoBtn = document.querySelector('.al1__video-btn')
let videoItem = document.querySelector('.al1__video-item')
let premierBtn = document.querySelector('.premier__btn span')
let premierNone = document.querySelector('.premier__item-none')



folderIcon.addEventListener('click', () => {
  let att = folderIcon.getAttribute('class')
  // console.log(att);
  if (att == 'fal fa-folder') {
    folderIcon.setAttribute('class', 'fal fa-folder-open')
    blockItem.classList.add('active')
  } else {
    folderIcon.setAttribute('class', 'fal fa-folder')
    blockItem.classList.remove('active')
  }
})




heartIcon.forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('class') == 'fal fa-heart model__icon') {
      el.setAttribute('class', 'fas fa-heart model__icon2')
    } else if (el.getAttribute('class') == 'fas fa-heart model__icon2') {
      el.setAttribute('class', 'fal fa-heart model__icon')
    }
  })
})



aliProektBtn.addEventListener('click', (el) => {
  if (aliProektBtn.innerHTML == 'Прямые') {
    pryamoy.style.display = 'flex'
    uglovoy.style.display = 'none'
    obrazniy.style.display = 'none'

    aliProektBtn.classList.add('active')
    aliProektBtn2.classList.remove('active')
    aliProektBtn3.classList.remove('active')
  }
})

aliProektBtn2.addEventListener('click', (el) => {
  if (aliProektBtn2.innerHTML == 'Угловые') {
    uglovoy.style.display = 'flex'
    pryamoy.style.display = 'none'
    obrazniy.style.display = 'none'

    aliProektBtn2.classList.add('active')
    aliProektBtn.classList.remove('active')
    aliProektBtn3.classList.remove('active')
  }
})

aliProektBtn3.addEventListener('click', (el) => {
  if (aliProektBtn3.innerHTML == 'П - образные') {
    obrazniy.style.display = 'flex'
    pryamoy.style.display = 'none'
    uglovoy.style.display = 'none'

    aliProektBtn3.classList.add('active')
    aliProektBtn2.classList.remove('active')
    aliProektBtn.classList.remove('active')
  }
})

videoBtn.addEventListener('click', (el) => {
  if (videoBtn.innerHTML == 'Закрыть видеоотзывов') {
    videoBtn.innerHTML = 'Открыть видеоотзывов'
    videoItem.style.display = 'none'

  } else if (videoBtn.innerHTML == 'Открыть видеоотзывов') {
    videoBtn.innerHTML = 'Закрыть видеоотзывов'
    videoItem.style.display = 'block'
  }
})


$('.premier__btn').click(() => {
  if ($('.premier__btn span').html() == 'Открыть?') {
    $('.premier__item-none').show()
    $('.premier__btn span').html('Закрыть?')
  } else if ($('.premier__btn span').html() == 'Закрыть?') {
    $('.premier__item-none').hide()
    $('.premier__btn span').html('Открыть?')
  }
})


























let chekBtn = document.querySelectorAll('.check__al1 img')
let uglBtn = document.querySelector('.uglavaya__btn')


chekBtn.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('src') == "./img/al1__galchka2.png") {
      el.setAttribute('src', './img/al1__galchka.png')
    } else if (el.getAttribute('src') == "./img/al1__galchka.png") {
      el.setAttribute('src', './img/al1__galchka2.png')
    }
  })
})
