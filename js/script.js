$('.modal-form').validate({
    rules: {
        phone: "required",
        checkbox: "required"
    },
    messages: {
       phone: "Пожалуйста, укажите Ваш номер телефона!",
       checkbox: "Подтвердите Ваше согласие" 
    },
    errorClass: "err"
});
$('input[name=phone]').mask("+7 (9 9 9) 9 9 9 - 9 9 - 9 9");

$('.modal-form').submit(function(e) {
    e.preventDefault();
    if(!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#form').fadeOut();
        $('#thanks').fadeIn('slow');
        $('.modal-form').trigger('reset');
    });
    return false;
});

const   call = document.querySelector('.callback'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelectorAll('.modal-close'),
        bulletAct = document.querySelector('.promo__bullet-action'),
        bulletModal = document.querySelector('.promo__bullet'),
        bulletItems = document.querySelectorAll('.promo__bullet-item'),
        humb = document.querySelector('.hamburger'),
        humbItems = document.querySelectorAll('.header__nav-item'),
        humbMenu = document.querySelector('.header__nav');

function callBack() {
    call.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    for (let i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
}

function bulletShow() {
    bulletAct.addEventListener('click', () => {
        bulletModal.classList.toggle('promo__bullet-active');
        if (bulletModal.classList.contains('promo__bullet-active')) {
            bulletAct.style.transform = 'rotate(90deg)';
            for (let i = 0; i < bulletItems.length; i++) {
                bulletItems[i].style.display = 'block';
            }
        }
        else {
            bulletAct.style.transform = 'rotate(45deg)';
            for (let i = 1; i < bulletItems.length; i++) {
                bulletItems[i].style.display = 'none';
            }
        }
    });
}

function humburgerMenu() {
    
    humb.addEventListener('click', () => {
        humb.classList.toggle('hamburger-active');
        humbMenu.classList.toggle('header__nav-active');
        humbItems[i].classList.toggle('active');
        /* if (humb.classList.contains('hamburger-active')) {
            for (let i = 0; i < humbItems.length; i++) {
                if (humbItems[i].classList.contains('mobile__active-logo' || 'mobile__active-call' || 'hamburger-active')) {
                    continue;
                } else {
                    humbItems[i].classList.toggle('active');
                }
            }
        } else {
            
        } */
    });
}
callBack();
bulletShow();
humburgerMenu();



