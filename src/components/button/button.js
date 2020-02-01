export default function (className, itemText, elemModifier) {

	var button = document.createElement("a");
	button.className = className + ' site-button'+ (elemModifier ? ' site-button_'+elemModifier:'');
	button.href = './change-me';

	var span = document.createElement("span");
	span.classList.add(className+"__text");
	span.textContent = itemText;
	
	button.appendChild(span);

	return button;
}