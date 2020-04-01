$('.iqdropdown').iqDropdown({  
	// selectionText: 'гость',
	textPlural: 'гостей', 

	// fires when an item quantity changes
		onChange: (id, count, totalItems) => {
			
				let mult = 10;
				while (mult < totalItems/10)
					mult *= 10;

				let remain = totalItems > 14 ? totalItems % mult : totalItems > 10 ?  0 : totalItems % mult;


		function returnText (remain) {

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


				$('.iqdropdown-selection').text(totalItems + ' ' + returnText (remain));
		},
});