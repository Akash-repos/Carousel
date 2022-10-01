let slideNo = 1

showSlide(slideNo)

function nextSlide(next) {

    slideNo += next
    showSlide(slideNo)
}

function dotSlide(dotnext) {

    slideNo = dotnext
    showSlide(slideNo)
}

function showSlide(number) {

    let i
    let imageNo = document.querySelectorAll('.b')
    let dotNo = document.querySelectorAll('.g');

    if (number > imageNo.length) {
        slideNo = 1
    }

    if (number < 1) {
        slideNo = imageNo.length
    }

    for (i = 0; i < imageNo.length; ++i) {
        imageNo[i].style.display = 'none'
    }

    for (i = 0; i < dotNo.length; ++i) {
        dotNo[i].classList.remove('active')
    }

    imageNo[slideNo - 1].style.display = 'block'
    dotNo[slideNo - 1].classList.add('active')
}