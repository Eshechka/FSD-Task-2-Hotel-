export default function (srcImage, className) {

	var logo = document.createElement("div");
	logo.className = className;

	var link = document.createElement("a");
	link.classList.add(className+"__link");
	link.href = './change-me';

	var logoImg = document.createElement("img");
	logoImg.classList.add(className+"__img");
	logoImg.src = srcImage;
	logoImg.alt = className+"__img";
	 
	link.appendChild(logoImg);
	logo.appendChild(link);

	return logo;
}