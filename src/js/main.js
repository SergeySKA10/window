'use strict';

import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import { openModal } from './modules/modal';
import images from './modules/images';


window.addEventListener('DOMContentLoaded', () => {

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        
        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();

        return scrollWidth;
    }
    
    const scroll = calcScroll();
    
    const showModalByTime = setTimeout(() => openModal('.popup', scroll, showModalByTime), 60000);
    
    let modalState = {
        form: 0,
        type: 'tree'
    },
        deadline = '2024-06-25';

    changeModalState(modalState);
    modal(showModalByTime, scroll);
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.sale', deadline);
    images(scroll);
});