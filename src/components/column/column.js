
export default function (className, arrayItemsText, titleText) {

	var column = document.createElement("div");
	column.className = className;

	var title = document.createElement("h3");
	title.className = className+"__title";
	title.textContent = titleText;
	column.appendChild(title);

	var list = document.createElement("ul");
	list.classList.add(className+"__list");
	
	var listItems = '';
	arrayItemsText.forEach(function(item) {
		listItems += '<li class="' + className+'__item' + '"><a class="'									
									+ className + '__link" href="./change-me">' 
									+ item + '</a></li>';
	});
	 
	list.innerHTML = listItems;
	column.appendChild(list);

	return column;
}