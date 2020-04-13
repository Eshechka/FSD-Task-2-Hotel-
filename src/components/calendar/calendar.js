import 'air-datepicker';

class Calendar {

	constructor(element) {
		
		this.calendar = element;
		this.addCalendar();
	}

	addCalendar() {
		this.calendar.datepicker({
		    minDate: new Date(),
		    // Парамтер {range: true} для выбора диапазона. В качестве разделителя дат будет использован multipleDatesSeparator
		    range: true,
		});
	}
}

class CalendarDateDropdown {

	constructor(element) {
		
		this.dateDropdown = element;
		this.leftDateDropdown = element.find('.js-date-dropdown__input_left');
		this.rightDateDropdown = element.find('.js-date-dropdown__input_right');

		this.addDateDropdown();
	}

	addDateDropdown() {
		const leftDate = this.leftDateDropdown;
		const rightDate = this.rightDateDropdown;

		const dateDropdown = this.leftDateDropdown.datepicker({

			minDate: new Date(),
			range: true,
			inline: false,

			onSelect: function () {
				rightDate.val(dateDropdown.selectedDates[1]);
				leftDate.val(dateDropdown.selectedDates[0]);
				
			}

		}).data('datepicker');

		rightDate.click(function () {
			dateDropdown.show();
		})		
	}
}

export {Calendar, CalendarDateDropdown};

