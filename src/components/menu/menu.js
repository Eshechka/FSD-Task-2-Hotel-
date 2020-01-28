export default function (arrayItemsText, className) {

	var menu = document.createElement("nav");
	menu.className = className;

	var list = document.createElement("ul");
	list.classList.add(className+"__list");
	
	var listItems = '';
	arrayItemsText.forEach(function(item) {
		listItems += '<li class="'+className+'__item"><a class="'+className+'__link" href="#">' + item + '</a></li>';
	});
	 
	list.innerHTML = listItems;
	menu.appendChild(list);

	return menu;
}