import Calendar from './calendar.js';

const calendarsList = $('.js-calendar');

calendarsList.each( (index, element) => { 
	new Calendar( $(element, "calendar") ) 
});