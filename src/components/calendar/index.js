import {Calendar, CalendarDateDropdown} from './calendar.js';

const calendarsList = $('.js-calendar');
const dateDropdownsList = $('.js-date-dropdown');

	calendarsList.each( (index, element) => { 
		new Calendar( $(element) ) 
	});


	dateDropdownsList.each( (index, element) => { 
		new CalendarDateDropdown( $(element) ) 
	});