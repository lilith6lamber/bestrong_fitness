'use strict';

import drawNotification from './alert';

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function validateContactForm() {
    const formElem = document.querySelector('.contacts_content-form');
    const inputEmail = document.querySelector('#messageEmail');
    const inputMessage = document.querySelector('#messageText');
    const selectSubject = document.querySelector('.custom-select-container');
    const selectSubjectPlaceholder = document.querySelector('.custom-select-opener span');

    const success = {
        title: "Thank you!",
        html: `
            <p class="main">Our customer service will reply you as soon as possible.</p>
            <span class="highlight">Have a nice day!<span>`,
        timer: 3000,
        customClass: {
            popup: 'contacts_popup',
            title: 'contacts_popup-title',
            htmlContainer: 'contacts_popup-content'
        }
    }

    formElem.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!emailRegExp.test(inputEmail.value)) {
            inputEmail.classList.add('error');
        }
        if (!inputMessage.value) {
            inputMessage.classList.add('error');
        }
        if (selectSubjectPlaceholder.textContent === 'Subject') {
            selectSubject.classList.add('error');
        }
        else {
            inputEmail.value = '';
            inputMessage.value = '';
            drawNotification(success);
        }
    });
    
    inputMessage.addEventListener('input', () => {
        inputMessage.classList.remove('error');
    });

    inputEmail.addEventListener('input', () => {
        inputEmail.classList.remove('error');
    });

    selectSubject.addEventListener('click', (e) => {
        if (e.target.textContent !== 'Subject') {
            selectSubject.classList.remove('error');
        }
    }); 

}
