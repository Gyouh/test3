const videoS = document.querySelector('.video');

const CloseMenu = document.querySelector('#closeMenuBtn');
const menuElementH = document.querySelector('.menuElementH');

// Corrected selectors for volume icons
const highVolume = document.querySelector('.fa-volume-high');
const lowVolume = document.querySelector('.fa-volume-off');

const recDot = document.querySelector('recDot');

let screenWidth = screen.width;

document.addEventListener('DOMContentLoaded', () =>{

    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.transition = '.5s';

    CloseMenu.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        if (menu.style.display === 'none' || menu.style.display === '')
        {
            menu.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
        }
        else
        {
            menu.style.display = 'none';
            document.querySelector('body').style.overflowY = 'scroll';
        }
    });

})



