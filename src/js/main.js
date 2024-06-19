'use strict';

import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import { openModal } from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

    const showModalByTime = setTimeout(() => openModal('.popup', showModalByTime), 6000);
    
    let modalState = {
        form: 0,
        type: 'tree'
    },
        deadline = '2024-06-25';

    changeModalState(modalState);
    modal(showModalByTime);
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.sale', deadline);
});