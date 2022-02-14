
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



    /***aplication form*/
    // const aplicationFormShort = document.forms['aplication-form-short'];
    // aplicationFormShort.addEventListener('submit', (ev) => {
    //     ev.preventDefault();
    //     const apFormShortFormdata = new FormData(ev.target);
    //     axios.post('/clients',apFormShortFormdata);
        
    
    // })