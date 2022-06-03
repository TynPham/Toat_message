function toast({title = '' , message = '' , type = 'success' , duration = 0}) {
    const main = document.getElementById('toast');
    const Toast = document.createElement('div');
    const icon = {
        success: 'fa-solid fa-circle-check',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-circle-exclamation',
        error: 'fa-solid fa-triangle-exclamation'
    }
    const delay = (duration / 1000).toFixed(2);
    Toast.classList.add('Toast' , `${type}`);
    Toast.style.animation = `slideleft ease 0.5s , moan linear 1s ${delay}s forwards`;
    Toast.innerHTML = `
        <div class="icon">
            <i class="${icon[type]}"></i>
        </div>
        <div class="bodys">
            <h3 class="title">${title}</h3>
            <p class="message">${message}</p>
        </div>
        <div class="close">
            <i class="fa-solid fa-xmark"></i>
        </div>
    `;
    main.appendChild(Toast);

    const loadremove = setTimeout(function() {
        main.removeChild(Toast);
    } , duration + 1000);

    Toast.onclick = function(e) {
        const closebtn = e.target.closest('.close');
        if (closebtn) {
            main.removeChild(Toast);
            clearTimeout(loadremove);
        }
    }
};
const successbtn = document.querySelector('.btn--success');
const warningbtn = document.querySelector('.btn--danger');
const errorbtn = document.querySelector('.btn--error');
const infobtn = document.querySelector('.btn--info');

successbtn.onclick = function() {
    toast({
        title: 'Thành công',
        message: 'Anyone with access can view your invited visitors.',
        type: 'success',
        duration: 2000
    })
}

warningbtn.onclick = function() {
    toast({
        title: 'Cảnh báo',
        message: 'Anyone with access can view your invited visitors.',
        type: 'warning',
        duration: 2000
    })
}

errorbtn.onclick = function() {
    toast({
        title: 'Lỗi!',
        message: 'Anyone with access can view your invited visitors.',
        type: 'error',
        duration: 2000
    })
}

infobtn.onclick = function() {
    toast({
        title: 'Info',
        message: 'Anyone with access can view your invited visitors.',
        type: 'info',
        duration: 2000
    })
}