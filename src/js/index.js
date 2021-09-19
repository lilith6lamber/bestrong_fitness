'use strict';

import drawSlider from './modules/slider';
import { validateContactForm } from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {
    drawSlider('.testimonials_slider', {
        controlsContainer: '.testimonials_slider-controls',
        nav: true,
        navPosition: 'bottom',
        autoHeight: true
    });

    validateContactForm();
});

