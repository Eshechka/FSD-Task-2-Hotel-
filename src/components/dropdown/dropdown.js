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
				switch(this.type) {
					case "rooms": 
						return "2 спальни, 2 кровати, 0 ванных комнат";
						break;
					case "guests":	
						return 'Сколько гостей';
						break;
				}
			},

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