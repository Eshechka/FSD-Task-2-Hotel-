export default function (className, arrayItemsText, arrayItemsWithPseudo) {

	var menu = document.createElement("nav");
	menu.className = className;

	var list = document.createElement("ul");
	list.classList.add(className+"__list");
	
	var listItems = '';
	arrayItemsText.forEach(function(item) {
		let needPseudoClass = '';
		if (arrayItemsWithPseudo.includes(item)) {
			needPseudoClass = ' ' + className + '__link_pseudo';
		};
		listItems += '<li class="' 	+ className+'__item' + '"><a class="'
									
									+ className + '__link ' + needPseudoClass + '" href="./change-me">' 
									+ item + '</a></li>';
	});
	 
	list.innerHTML = listItems;
	menu.appendChild(list);

	return menu;
}