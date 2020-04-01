$('.date-dropdown__input').inputmask({
	placeholder: "ДД.ММ.ГГГГ", 
	alias: "datetime", 
	inputFormat: "dd.mm.yyyy", 
}); 




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
