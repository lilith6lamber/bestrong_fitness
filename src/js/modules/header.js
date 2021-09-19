'use strict';

import Headroom from "headroom.js";
import { setMargin } from "./setters";

function initHeader(settings, trigger, menu, menuLinks) {
    const headerEl = document.querySelector(".header");
    const headerDefaults = {
        "offset": 500,
        "tolerance": 10,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    };
    const headroom = new Headroom(headerEl, settings ? settings : headerDefaults);
    headroom.init();
    drawNav(trigger, menu, menuLinks);

    window.addEventListener('load', () => {
        setMargin(headerEl);
    });

    window.addEventListener('resize', () => {
        setMargin(headerEl);
    });
}

function drawNav(trigger, menu, menuLinks) {

    const menuTrigger = document.querySelector(trigger),
        menuList = document.querySelector(menu),
        menuItems = document.querySelectorAll(menuLinks);

    function openMenu() {
        menuTrigger.classList.toggle('is-active');
        menuList.classList.toggle('is-active-nav');
    }

    function closeMenu() {
        menuList.classList.remove('is-active-nav');
        menuTrigger.classList.remove('is-active');
    }

    menuTrigger.addEventListener('click', openMenu);

    menuItems.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (!window.getComputedStyle(menuTrigger).display === 'none') {
            menuList.style.display = 'block';
        } else if (menuList.classList.contains('is-active-nav')){
            closeMenu();
        }
    })
}

export default initHeader;