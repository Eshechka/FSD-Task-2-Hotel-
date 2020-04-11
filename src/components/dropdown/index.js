import Dropdown from './dropdown.js';

const $dropdownsList = $('.js-iqdropdown');

$dropdownsList.each( (index, element) => {
	new Dropdown( $(element) );
});

