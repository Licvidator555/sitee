"use strict"
window.onload = function () {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human');
        const ForClouds = 40;
        const ForMountains = 20;
        const ForHuman = 10;
        const speed =0.05;
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed);
            positionY = positionY + ( distY * speed);
            clouds.style.cssText +=  `transform: translate(${ positionX / ForClouds}%,${positionY/ForClouds}%);`;
            mountains.style.cssText += `transform: translate(${ positionX / ForMountains}%,${positionY / ForMountains}%);`;
            human.style.cssText += `transform: translate(${ positionX / ForHuman }%,${positionY / ForHuman }%);`;
            requestAnimationFrame(setMouseParallaxStyle);

        }
        setMouseParallaxStyle();
        parallax.addEventListener("mousemove", function (e) {
      const  parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;
      const  coordX = e.pageX - parallaxWidth / 2;
    const coordY = e.pageY -  parallaxHeight / 2;
    coordXprocent = coordX / parallaxWidth * 100;
    coordYprocent = coordY /  parallaxHeight * 100;
    });
    }

}

function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();


    $(document).ready(function() {
        $('.header__burger').click(function (event) {
            $('.header__burger, .header__menu').toggleClass('active');
           
        });
    
    });



   