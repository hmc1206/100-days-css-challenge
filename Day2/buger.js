let buger = document.querySelector('.menu-trigger');
let clicked = 0;

buger.addEventListener('click', function(){
    if(clicked){
        buger.className = 'menu-trigger';
        clicked = 0;
    }else {
        buger.className = 'menu-trigger active';
        clicked = 1;
    }
});