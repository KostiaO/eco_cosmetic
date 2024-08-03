import $ from 'jquery';

import "./scss/app.scss";

$('.header-burger-btn').on('click', () => {
    $('.burger').addClass('burger--active');

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
});

$('.burger-btn').on('click', () => {
    $('.burger').removeClass('burger--active');

    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    })
});
