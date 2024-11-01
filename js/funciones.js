/*
    ini Alex---------------------------------------------------------------------
*/
let visualizando = 0;
let diapositivas = 0;
cambiaDiapositiva(visualizando);
/* fin de la ejecución en la carga de la página*/
/* ini de la ejecución de eventos del usuario*/
function goNext(){
    visualizando += 1;
    if(visualizando > (diapositivas - 1)){
        visualizando = 2;
    }
    cambiaDiapositiva(visualizando);
}
function goPrev(){
    visualizando -= 1;
    if(visualizando < 0){
        visualizando = 0;
    }
    cambiaDiapositiva(visualizando);
}
function cambiaDiapositiva(num){
    let thisSwiper = document.getElementById('swiperWrapperAlex').getElementsByClassName('swiper-slide') /* conjunto de dispositivas del slider*/
    diapositivas = thisSwiper.length;                                         /* establece el contador del slider, que es necesario para recorrer las diapositivas con el for*/
    for (let i = 0; i < diapositivas; i++) {
        if(i == num){
            thisSwiper[i].classList.add('active');
        }else{
            thisSwiper[i].classList.remove('active');
        }
    }
}
/* fin de la ejecución de eventos del usuario*/
/*
    fin Alex
*/
/*
    ini Alex1---------------------------------------------------------------------
*/
let visualizando1 = 0;
let diapositivas1 = 0;
cambiaDiapositiva1(visualizando1);
/* fin de la ejecución en la carga de la página*/
/* ini de la ejecución de eventos del usuario*/
function goNext1(){
    visualizando1 += 1;
    if(visualizando1 > (diapositivas1 - 1)){
        visualizando1 = 2;
    }
    cambiaDiapositiva1(visualizando1);
}
function goPrev1(){
    visualizando1 -= 1;
    if(visualizando1 < 0){
        visualizando1 = 0;
    }
    cambiaDiapositiva1(visualizando1);
}
function cambiaDiapositiva1(num){
    let thisSwiper = document.getElementById('swiperWrapperAlex1').getElementsByClassName('swiper-slide')
    diapositivas1 = thisSwiper.length;
    for (let i = 0; i < diapositivas1; i++) {
        if(i == num){
            thisSwiper[i].classList.add('active');
        }else{
            thisSwiper[i].classList.remove('active');
        }
    }
}
/* fin de la ejecución de eventos del usuario*/
/*
    fin Alex1
*/
/*
    ini Alex2---------------------------------------------------------------------
*/
let visualizando2 = 0;
let diapositivas2 = 0;
cambiaDiapositiva2(visualizando2);
/* fin de la ejecución en la carga de la página*/
/* ini de la ejecución de eventos del usuario*/
function goNext2(){
    visualizando2 += 1;
    if(visualizando2 > (diapositivas2 - 1)){
        visualizando2 = 2;
    }
    cambiaDiapositiva2(visualizando2);
}
function goPrev2(){
    visualizando2 -= 1;
    if(visualizando2 < 0){
        visualizando2 = 0;
    }
    cambiaDiapositiva2(visualizando2);
}
function cambiaDiapositiva2(num){
    let thisSwiper = document.getElementById('swiperWrapperAlex2').getElementsByClassName('swiper-slide')
    diapositivas2 = thisSwiper.length;
    for (let i = 0; i < diapositivas2; i++) {
        if(i == num){
            thisSwiper[i].classList.add('active');
        }else{
            thisSwiper[i].classList.remove('active');
        }
    }
}

/* fin de la ejecución de eventos del usuario*/
/*
    fin Alex2
*/
/*
    ini Alex3---------------------------------------------------------------------
*/
let visualizando3 = 0;
let diapositivas3 = 0;
cambiaDiapositiva3(visualizando3);
/* fin de la ejecución en la carga de la página*/
/* ini de la ejecución de eventos del usuario*/
function goNext3(){
    visualizando3 += 1;
    if(visualizando3 > (diapositivas3 - 1)){
        visualizando3 = 2;
    }
    cambiaDiapositiva3(visualizando3);
}
function goPrev3(){
    visualizando3 -= 1;
    if(visualizando3 < 0){
        visualizando3 = 0;
    }
    cambiaDiapositiva3(visualizando3);
}
function cambiaDiapositiva3(num){
    let thisSwiper = document.getElementById('swiperWrapperAlex3').getElementsByClassName('swiper-slide')
    diapositivas3 = thisSwiper.length;
    for (let i = 0; i < diapositivas3; i++) {
        if(i == num){
            thisSwiper[i].classList.add('active');
        }else{
            thisSwiper[i].classList.remove('active');
        }
    }
}

/* fin de la ejecución de eventos del usuario*/
/*
    fin Alex3
*/