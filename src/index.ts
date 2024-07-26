import $ from 'jquery';

import "./scss/app.scss";

$('.header-burger-btn').on('click', () => {
    $('.burger').addClass('burger--active');
});

$('.burger-btn').on('click', () => {
    $('.burger').removeClass('burger--active');
})
