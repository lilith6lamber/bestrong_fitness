'use strict';

import { tns } from "tiny-slider/src/tiny-slider";

function drawSlider(container, settings) {
    const sliderDefaults = {
        items: 1,
        mode: 'carousel',
        controlsContainer: null
    };

    let slider = tns({
        container: container,
        ...sliderDefaults,
        ...settings
    });
    slider.updateSliderHeight();
}

export default drawSlider;