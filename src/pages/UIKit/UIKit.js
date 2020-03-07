// import * as $ from 'jquery';
import 'air-datepicker';
import '../../components/slider/slider';

import '../../common-files/ui-style.scss';

import '../../img/TOXIN_just_picture.svg';
import '../../img/TOXIN_Logo.svg';

import '../../img/room888_picture.png';

import '../../img/room840_picture.png';
import '../../img/room840_picture2.png';
import '../../img/room840_picture3.png';
import '../../img/room840_picture4.png';



$('.calendar').datepicker({
	// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
    // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
    range: true,
});








console.log('in UIKit.js');