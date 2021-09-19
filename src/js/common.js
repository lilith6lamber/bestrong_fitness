'use strict';

import initHeader from './modules/header';
import LazyLoad from "vanilla-lazyload";
import { initCustomSelect } from './modules/select';
import WOW from 'wow.js';

const wait = (delay = 0) =>
    new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (selector, visible) => {
    selector = document.getElementById(selector);
    if (visible) {
        selector.classList.add("visible");
        document.documentElement.style.overflowY = 'hidden';
    } else {
        selector.classList.remove("visible");
        document.body.classList.add("visible");
        document.documentElement.style.overflowY = 'visible';
    }
}

setVisible('loadingScreen', true);

document.addEventListener('DOMContentLoaded', () =>
    wait(1000).then(() => {
        setVisible('loadingScreen', false);
    }));

document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
    initHeader(null, '.hamburger', '.header_nav', '.header_nav-item');
    const lazyloadInit = new LazyLoad();
    initCustomSelect();
})