import createMenu from '../../components/menu/menu';
import createButton from '../../components/button/button';
import createLogo from '../../components/logo/logo';
import createColumn from '../../components/column/column';

import pictureLogo from '../../img/TOXIN_Logo.svg';
import pictureBG from '../../img/BG_main.png';

import '../style.css';

var headerLogo = createLogo(pictureLogo, 'header-logo');

var menu = createMenu('menu', ['О нас','Услуги', 'Вакансии', 'Новости', 'Соглашения'], ['Услуги', 'Соглашения']);

var enterButton = createButton('enter-button', 'Войти', 'light');
var registrationButton = createButton('registration-button', 'Зарегистрироваться');

var column1 = createColumn('nav-column', ['О нас', 'Новости', 'Служба поддержки', 'Услуги'], 'Навигация');//navigation
var column2 = createColumn('nav-column', ['О сервисе', 'Наша команда', 'Вакансии', 'Инвесторы'], 'О нас');//about-us
var column3 = createColumn('nav-column', ['Соглашения', 'Сообщества', 'Связь с нами'], 'Служба поддержки');//support

document.querySelector('.logo').appendChild(headerLogo);
document.querySelector('.main-nav').appendChild(menu);
document.querySelector('.auth').appendChild(enterButton);
document.querySelector('.auth').appendChild(registrationButton);
document.querySelector('.all-navigation').appendChild(column1);
document.querySelector('.all-navigation').appendChild(column2);
document.querySelector('.all-navigation').appendChild(column3);


console.log('in index.js');

