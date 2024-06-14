'use strict';

import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', () => {
    modal();
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    forms();
});