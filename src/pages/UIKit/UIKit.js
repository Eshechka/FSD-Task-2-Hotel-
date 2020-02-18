// import * as $ from 'jquery';
import 'air-datepicker';

import '../../common-files/ui-style.scss';

import '../../img/TOXIN_just_picture.svg';



$('.calendar').datepicker({
	// Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
});




console.log('in UIKit.js');