
//mobile menu
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuItems = document.getElementById("mobile-menu-items");
mobileMenu.addEventListener('click', ()=> {
    mobileMenuItems.style.display='block';
    });


const closeMobileMenu = document.getElementById("close-mobile-menu");

closeMobileMenu.addEventListener('click', ()=> {
    mobileMenuItems.style.display='none';
    
});


/*faq - read more */
const faqQuestionSmallText1 = document.getElementById("faq-question-small-text1");
const faqQuestionSmallPlus1 = document.getElementById("faq-question-small-plus1");
const faqQuestionSmallClose1 = document.getElementById("faq-question-small-close1");
faqQuestionSmallPlus1.addEventListener('click', ()=> {
    faqQuestionSmallText1.style.display='block';
    faqQuestionSmallClose1.style.display='block';
    faqQuestionSmallPlus1.style.display='none';
    });

faqQuestionSmallClose1.addEventListener('click', ()=> {
    faqQuestionSmallText1.style.display='none';
    faqQuestionSmallClose1.style.display='none';
    faqQuestionSmallPlus1.style.display='block';
    });

const faqQuestionSmallText2 = document.getElementById("faq-question-small-text2");
const faqQuestionSmallPlus2 = document.getElementById("faq-question-small-plus2");
const faqQuestionSmallClose2 = document.getElementById("faq-question-small-close2");
faqQuestionSmallPlus2.addEventListener('click', ()=> {
    faqQuestionSmallText2.style.display='block';
    faqQuestionSmallClose2.style.display='block';
    faqQuestionSmallPlus2.style.display='none';
    });

faqQuestionSmallClose2.addEventListener('click', ()=> {
    faqQuestionSmallText2.style.display='none';
    faqQuestionSmallClose2.style.display='none';
    faqQuestionSmallPlus2.style.display='block';
    });


const faqQuestionSmallText3 = document.getElementById("faq-question-small-text3");
const faqQuestionSmallPlus3 = document.getElementById("faq-question-small-plus3");
const faqQuestionSmallClose3 = document.getElementById("faq-question-small-close3");
faqQuestionSmallPlus3.addEventListener('click', ()=> {
    faqQuestionSmallText3.style.display='block';
    faqQuestionSmallClose3.style.display='block';
    faqQuestionSmallPlus3.style.display='none';
    });

faqQuestionSmallClose3.addEventListener('click', ()=> {
    faqQuestionSmallText3.style.display='none';
    faqQuestionSmallClose3.style.display='none';
    faqQuestionSmallPlus3.style.display='block';
    });

    
    /*partner-comments-slider*/
/*const partnerCommentsSliderLeftarrow = document.getElementById("partner-comments-slider-leftarrow");
const partnerCommentsSliderRightarrow = document.getElementById("partner-comments-slider-rightarrow");
const partnerCommentsSliderMainscreenSlide = document.getElementById("partner-comments-slider-mainscreen-slide");
const partnerCommentsSliderMainscreen = document.getElementById("partner-comments-slider-mainscreen");
let i=1;
let j=1;
partnerCommentsSliderLeftarrow.addEventListener('click', ()=> {
partnerCommentsSliderMainscreen.style.left='-225px'*/

   //partnerCommentsSliderMainscreenSlide.style.transform='translateX(-230px)'
    /* let translateSize=-230*i;
    partnerCommentsSliderMainscreenSlide.style.transform=`translateX(-${translateSize}px)`;
    i++*/
   /* });

partnerCommentsSliderRightarrow.addEventListener('click', ()=> {
    partnerCommentsSliderMainscreen.style.left='225px'*/
    /*let translateSizeRight=230*j;
    partnerCommentsSliderMainscreenSlide.style.transform=`translateX(-${translateSizeRight}px)`;
    j++*/
    /*});*/

















    // /* этот код помечает картинки, для удобства разработки */
    // let i = 1;
    // for(let li of carousel.querySelectorAll('li')) {
    //   li.style.position = 'relative';
    //   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    //   i++;
    // }

    // /* конфигурация */
    // let width = 200; // ширина картинки
    // let count = 3; // видимое количество изображений

    // let list = carousel.querySelector('ul');
    // let listElems = carousel.querySelectorAll('li');

    // let position = 1; // положение ленты прокрутки

    // carousel.querySelector('.prev').onclick = function() {
    //   // сдвиг влево
    //   position += width * 1;
    //   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    //   position = Math.min(position, 0)
    //   list.style.marginLeft = position + 'px';
    // };

    // carousel.querySelector('.next').onclick = function() {
    //   // сдвиг вправо
    //   position -= width * 1;
    //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    //   position = Math.max(position, -width * (listElems.length - count));
    //   list.style.marginLeft = position + 'px';
    // };