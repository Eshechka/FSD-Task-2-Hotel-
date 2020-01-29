import createMenu from '../../components/menu/menu';
import createButton from '../../components/button/button';
import createLogo from '../../components/logo/logo';

import pictureLogo from '../../img/TOXIN_Logo.svg';
import pictureBG from '../../img/BG_main.png';

import '../style.css';

var headerLogo = createLogo(pictureLogo, 'header-logo');

var menu = createMenu('menu', ['О нас','Услуги', 'Вакансии', 'Новости', 'Соглашения'], ['Услуги', 'Соглашения']);

var enterButton = createButton('enter-button', 'Войти', 'light');
var registrationButton = createButton('registration-button', 'Зарегистрироваться');

document.querySelector('.logo').appendChild(headerLogo);
document.querySelector('.main-nav').appendChild(menu);
document.querySelector('.auth').appendChild(enterButton);
document.querySelector('.auth').appendChild(registrationButton);


console.log('in index.js');

