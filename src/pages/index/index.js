import createMenu from '../../components/menu/menu';
import createButton from '../../components/button/button';
import createLogo from '../../components/logo/logo';

import pictureLogo from '../../img/TOXIN_Logo.svg';
import pictureBG from '../../img/BG_main.png';

import '../style.css';

var headerLogo = createLogo(pictureLogo, 'header-logo');

var menu = createMenu(['О нас','Услуги', 'Вакансии', 'Новости', 'Соглашения'], 'menu');

var enterButton = createButton('Войти', 'enter-button');
var registrationButton = createButton('Зарегистрироваться', 'registration-button');

document.querySelector('.logo').appendChild(headerLogo);
document.querySelector('.main-nav').appendChild(menu);
document.querySelector('.auth').appendChild(enterButton);
document.querySelector('.auth').appendChild(registrationButton);


console.log('in index.js');

