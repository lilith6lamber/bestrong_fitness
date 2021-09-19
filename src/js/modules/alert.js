'use strict';

import Swal from 'sweetalert2';

function drawNotification(settings) {
    Swal.fire({
        showConfirmButton: false,
        ...settings
    })
}

export default drawNotification;