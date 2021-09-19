'use strict';

export function setMargin(el) {
    const main = document.querySelector('main');
    const marginTop = window.getComputedStyle(el).height;
    main.style.marginTop = marginTop;
}
