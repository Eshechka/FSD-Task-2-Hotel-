import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class Dropdown {
	constructor(element) {

		this.element = element;
		this.elementText = element.find('.js-iqdropdown-selection');
		this.addDropdown();

	}

	addDropdown() {
		this.element.iqDropdown({

			setSelectionText: (itemCount, totalItems) => { return 'Сколько гостей' },

			onChange: (id, count, totalItems) => {
				
					let mult = 10;
					while (mult < totalItems/10)
						mult *= 10;

					let remain = totalItems > 14 ? totalItems % mult : totalItems > 10 ?  0 : totalItems % mult;

				this.elementText.text(totalItems + ' ' + _returnText(remain, totalItems));

			},

		});

		function _returnText (remain, totalItems) {

			if (totalItems === 0) return 'Сколько гостей';

			switch(remain) {
				case 1:  
					return 'гость';
					break;

				case 2:
				case 3:
				case 4:
					return 'гостя';
					break;

				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 0:
					return 'гостей';
					break;
			}
		}
	}


}

export default Dropdown;