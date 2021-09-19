'use strict';

import customSelect from 'custom-select';

export function initCustomSelect() {
    const cstSel = customSelect('select')[0];
    const selectPlaceholder = cstSel.select.options[0];
    cstSel.container.addEventListener('custom-select:open', () => {
        cstSel.remove(selectPlaceholder);
    });
    document.body.addEventListener('click', (e) => {
        if (!e.target.matches('.custom-select-option') && cstSel.open && cstSel.value !== 'default') {
            cstSel.insertBefore(selectPlaceholder, cstSel.select.options[0]);
        }
    });
}
