// import * as $ from 'jquery';
import 'air-datepicker';
import 'inputmask/dist/jquery.inputmask';
// import 'inputmask/lib/extensions/inputmask.date.extensions';
// import 'item-quantity-dropdown';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';


import '../../components/slider/slider';
import '../../components/dropdown/dropdown';
import '../../components/calendar/calendar';
import '../../components/text-field/text-field';
import '../../components/date-dropdown/date-dropdown';
import '../../components/filter-date-dropdown/filter-date-dropdown';



import '../../components/dropdown/index.js';//nafig eto



import './UIKit.scss';


function importAll (r) {
  r.keys().forEach(r);
}

// importAll(require.context('../../img/', true, /\.(svg|png)$/));

// import '../../img/TOXIN_just_picture.svg';
// import '../../img/TOXIN_Logo.svg';

// import '../../img/room888_picture.png';

// import '../../img/room840_picture.png';
// import '../../img/room840_picture2.png';
// import '../../img/room840_picture3.png';
// import '../../img/room840_picture4.png';



importAll(require.context('../../components/', true, /\.(svg|png)$/));




$('.calendar').datepicker({
	// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
    // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
    range: true,
});

