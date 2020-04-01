let dateFilterDropdown = $('.filter-date-dropdown__input')

let dateFilterDropdownDatepicker = dateFilterDropdown.datepicker({

	minDate: new Date(),
	dateFormat: 'd M',
    range: true,
    inline: false,
    multipleDatesSeparator: '-'

}).data('datepicker');


