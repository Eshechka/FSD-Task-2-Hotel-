export default function (itemText, className) {

	var button = document.createElement("a");
	button.className = className + ' site-button';
	button.href = '#';

	var span = document.createElement("span");
	span.classList.add(className+"__text");
	span.textContent = itemText;
	
	button.appendChild(span);

	return button;
}