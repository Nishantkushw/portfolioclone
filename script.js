const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 200)
});


let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr =ScrollReveal({
    distance:'40px',
    duration:2050,
    delay:200,
    reset:true
});

sr.reveal('.hero-text',{origin:'top'});
sr.reveal('.about-img, .service-item, .about-text',{origin:'bottom'});
sr.reveal('.about-img h2, .text-center, .right-contact h2,.education h4',{origin:'bottom'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.right-contact',{origin:'right'});
sr.reveal('.end-section',{origin:'top'});