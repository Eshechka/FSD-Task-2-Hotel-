// import * as $ from 'jquery';
// import 'air-datepicker';
import 'inputmask/dist/jquery.inputmask';
// import 'inputmask/lib/extensions/inputmask.date.extensions';
// import 'item-quantity-dropdown';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';


import './UIKit.scss';


function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../../components/', true, /\.(svg|png|js)$/));




// $('.calendar').datepicker({
// 	// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
//     minDate: new Date(),
//     // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
//     range: true,
// });

