import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
	constructor(element) {

		this.element = element;
		this.elementText = element.find('.js-iqdropdown-selection');
		this.type = element.data('type');
		this.addDropdown();
	}

	addDropdown() {
		this.element.iqDropdown({

			setSelectionText: (itemCount, totalItems) => {

				if (totalItems === 0) {
					return _getTextNoItems(this.type);
				}
				else {
					let remain = _getRemain(totalItems);
					return _getText(remain, totalItems, this.type);
				}

			},

			onChange: (id, count, totalItems) => {

				let remain = _getRemain(totalItems);
				this.elementText.text(_getText(remain, totalItems, this.type));
			},

		});

		function _getRemain(totalItems) {
			let mult = 10;

			while (mult < totalItems/10)
				mult *= 10;

			if ( (totalItems > 14) || (totalItems < 11) )
					return totalItems % mult;

			return 0;
		}

		function _getTextNoItems(type) {
			switch(type) {
				case 'rooms': 
					return 'Выберите значения';
					break;
				case 'guests':	
					return 'Сколько гостей';
					break;
			}
		}

		function _getText(remain, totalItems, type) {

			if (totalItems === 0) return 'Сколько гостей';

			switch(true) {
				case remain === 1:  
					totalItems += ' гость';
					break;

				case remain < 5:
					totalItems += ' гостя';
					break;

				default:
					totalItems += ' гостей';
					break;
			}

			return totalItems;
		}
	}



}

export default Dropdown;



// let dropdownTypes = { 
// 	guests: {	1: 'гость',
// 				2: 'гостя',
// 				3: 'гостя',
// 				4: 'гостя', 
// 				5: 'гостей', 
// 			},
// 	rooms: {	1: 'комната',
// 				2: 'комнаты',
// 				3: 'комнаты',
// 				4: 'комнаты', 
// 				5: 'комнат', 
// 			},

// }