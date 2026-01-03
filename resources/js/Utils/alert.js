import Swal from 'sweetalert2'

export const showAlert = {
    success: (message) => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: message,
            timer: 3000,
            showConfirmButton: false
        })
    },
    error: (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: message,
            confirmButtonColor: '#d33'
        })
    },
    warning: (message) => {
        Swal.fire({
            icon: 'warning',
            title: 'Warning!',
            text: message,
            confirmButtonColor: '#f39c12'
        })
    },
    info: (message) => {
        Swal.fire({
            icon: 'info',
            title: 'Info',
            text: message,
            confirmButtonColor: '#3085d6'
        })
    }
}