// $('.calendar').datepicker({
// 	// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
//     minDate: new Date(),
//     // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
//     range: true,
// });

import 'air-datepicker';

// class Calendar {

// 	constructor(element, type) {
		
// 		this.calendar = element;

// 		addCalendar();
// 	}

// 	addCalendar() {
// 		this.calendar.datepicker({
// 			// Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
// 		    minDate: new Date(),
// 		    // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
// 		    range: true,
		    
// 		}).data('datepicker');
// 	}

// }

// export default Calendar;

let dateLeft = $('.date-dropdown__input_left')
let dateRight = $('.date-dropdown__input_right')


let dateDropdownDatepicker = dateLeft.datepicker({
	minDate: new Date(),
    range: true,
    inline: false,

    onSelect: function (date) {
    	dateRight.val(dateDropdownDatepicker.selectedDates[1]);
		dateLeft.val(dateDropdownDatepicker.selectedDates[0]);
		}
	}).data('datepicker');


dateRight.click(function () {
	dateDropdownDatepicker.show();
})



$('.two-date-dropdown-calendar__input').inputmask({
	placeholder: "ДД.ММ.ГГГГ", 
	alias: "datetime", 
	inputFormat: "dd.mm.yyyy", 
}); 