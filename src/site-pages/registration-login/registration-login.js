/* eslint-disable no-undef */
// jquery импортирована вебпаком
import './registration-login.scss';
import '../../common';
import initRegistrationCard from '../../cards/registration-card/registration-card';
import '../../cards/login-card/login-card';


const url = new URL(window.location.href);
const isLogin = url.searchParams.get('login');

const template = require('./registration-login__card-template.pug');

const locals = {
  login: isLogin,
};
const templateHTML = template(locals);

const $registrationLoginContent = $('.registration-login__content');

if (locals.login === 'true') {
  $registrationLoginContent.addClass('registration-login__login-container')
    .html(templateHTML);
} else {
  const $footer = $('.registration-login__footer');
  $footer.addClass('registration-login__registration-footer');
  $registrationLoginContent.addClass('registration-login__registration-container')
    .html(templateHTML);
}

initRegistrationCard();