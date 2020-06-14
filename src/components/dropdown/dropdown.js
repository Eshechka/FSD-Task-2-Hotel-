import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

class TypeWithTextEndings {
	constructor(noItems, equal0More4, equal1, defaultItems) {
		this.noItems = noItems;
		this.equal0More4 = equal0More4;
		this.equal1 = equal1;
		this.defaultItems = defaultItems;
	}
}

let types = {};

types.guests = new TypeWithTextEndings('Сколько гостей','гостей','гость','гостя');
types.rooms = new TypeWithTextEndings('Выберите количество','комнат','комната','комнаты');
types.bedrooms = new TypeWithTextEndings('Выберите количество','спален','спальня','спальни');


class Dropdown {
	constructor(element) {

		this.element = element;
		this.elementText = element.find('.js-iqdropdown-selection');
		this.type = element.data('type');
		this.addDropdown();
	}

	addDropdown() {
		this.element.iqDropdown({
			
			// let str = '';

			setSelectionText: (itemCount, totalItems) => {

				if (totalItems === 0) {
					return _getTextNoItems(this.type);
				}
				else 
					if (false) {
						let remain = _getRemain(totalItems);
						// console.log(itemCount);
						return _getText(remain, totalItems, this.type);
					}
					else 
						for (let key in itemCount) {
							let remain = _getRemain(itemCount[key]);
							// str += itemCount[key];

							// console.log(remain);
							// console.log("!!!!!! = ", itemCount);
							// console.log("!!! = ", itemCount[key]);
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
			return types[type].noItems;
		}

		function _getText(remain, totalItems, type) {

			if (totalItems === 0) 
				_getTextNoItems(type);

			switch(true) {
				case remain > 4: 
				case remain === 0:  
					totalItems += ' ' + types[type].equal0More4;
					break;

				case remain === 1:  
					totalItems += ' ' + types[type].equal1;
					break;

				default:
					totalItems += ' ' + types[type].defaultItems;
					break;
			}

			return totalItems;
		}
	}
}

export default Dropdown;