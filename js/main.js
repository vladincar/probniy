//fill heart with images
const imgDivs = document.querySelectorAll('.heartContainer>div');
imgDivs.forEach((div, indx) => {
    let x = window.getComputedStyle(div).getPropertyValue("grid-area");
    if (!x.endsWith('/ auto / auto / auto')) {
        div.style.backgroundImage = `url('/photos/smallPhotos/${indx + 1}.png')`;
    }
})

//
const section2h2 = document.querySelector('.h2 h2:nth-child(2)');
if (window.screen.width <= 700) {
    section2h2.innerHTML='Споряджeння'
}
//
const section1Btn = document.querySelector('.section1Btn');
if (window.screen.width <= 420) {
    section1Btn.innerHTML='ДОПОМОГТИ'
    section2h2.innerHTML='Спорядж.'
}
const section3Header = document.querySelectorAll('.section3Header>p:nth-child(1)');
if (window.screen.width <= 450) {
    section3Header.forEach(x=>x.innerHTML='ЗА БАНК. РЕКВІЗІТАМИ')
}
//

const h2 = document.querySelectorAll('.h2 h2');
const text = document.querySelectorAll('.section1Text div');
const radio = document.querySelectorAll('.checkmark');

radio.forEach((x, indx) => {
    x.addEventListener('click', () => {
        h2[indx].classList.add('jsVisible');
        h2[indx].classList.remove('jsNotVisible');

        text[indx].classList.add('jsVisible');
        text[indx].classList.remove('jsNotVisible');
        if (indx === 0) {
            h2[indx].classList.add('jsVisible')
            h2[0].style.transform = 'translateX(0)'
            h2[1].style.transform = 'translateX(0)'
            h2[2].style.transform = 'translateX(-100%)'

            h2[1].classList.remove('jsVisible')
            h2[2].classList.remove('jsVisible')
            h2[1].classList.add('jsNotVisible')
            h2[2].classList.add('jsNotVisible')

            text[0].style.transform = 'translateX(0)'
            text[1].style.transform = 'translateX(0)'
            text[2].style.transform = 'translateX(-100%)'

            text[1].classList.remove('jsVisible')
            text[2].classList.remove('jsVisible')
            text[1].classList.add('jsNotVisible')
            text[2].classList.add('jsNotVisible')
        }
        else if (indx === 1) {
            h2[0].style.transform = 'translateX(-100%)'
            h2[1].style.transform = 'translateX(-100%)'
            h2[2].style.transform = 'translateX(-100%)'

            h2[0].classList.remove('jsVisible')
            h2[2].classList.remove('jsVisible')
            h2[0].classList.add('jsNotVisible')
            h2[2].classList.add('jsNotVisible')

            text[0].style.transform = 'translateX(-100%)'
            text[1].style.transform = 'translateX(-100%)'
            text[2].style.transform = 'translateX(-100%)'

            text[0].classList.remove('jsVisible')
            text[2].classList.remove('jsVisible')
            text[0].classList.add('jsNotVisible')
            text[2].classList.add('jsNotVisible')
        }
        else if (indx === 2) {
            h2[0].style.transform = 'translateX(-100%)'
            h2[1].style.transform = 'translateX(-200%)'
            h2[2].style.transform = 'translateX(-200%)'

            h2[0].classList.remove('jsVisible')
            h2[1].classList.remove('jsVisible')
            h2[0].classList.add('jsNotVisible')
            h2[1].classList.add('jsNotVisible')

            text[0].style.transform = 'translateX(-100%)'
            text[1].style.transform = 'translateX(-200%)'
            text[2].style.transform = 'translateX(-200%)'

            text[0].classList.remove('jsVisible')
            text[1].classList.remove('jsVisible')
            text[0].classList.add('jsNotVisible')
            text[1].classList.add('jsNotVisible')
        }

    })
})


