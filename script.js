var sidebarBol = false;
var slideNum = 2;
var slideIndex = 1;
var sizefont = 3;

function navegar(url) {
	const target = document.getElementById(String(url))
	yTarget = target.offsetTop - document.body.scrollTop - 120;
	
	window.scrollTo({
  		top: yTarget,
  		behavior: 'smooth'
	});
}

function sidebarCheck() {

	var sidebar = document.getElementById('sidebar');
	var blackdrop = document.getElementById('blackdrop');
	var menusidebar = document.getElementById('menu-sidebar');

	if(sidebarBol) {
		sidebarBol = false;
		sidebar.style.width = '0px';
		menusidebar.style.display = 'none'
		menusidebar.style.opacity = '0'
		blackdrop.style.display = 'none';
		document.body.style.overflowY = 'visible';
	}

	else{
		sidebarBol = true
		sidebar.style.width = '260px';
		menusidebar.style.display = 'block'
		menusidebar.style.opacity = '1'
		blackdrop.style.display = 'block';
		document.body.style.overflowY = 'hidden';
	}

}

function scrolltotop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

function updateColspan() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      var cells = document.querySelectorAll('.tag');
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (viewportWidth <= 920) {
          cell.colSpan = 1;
        } 

        else {
          cell.colSpan = 2;
        }
    }
}

function nextSlide() {

	var imgbanner = document.getElementById('imgbanner');

	if (slideIndex<slideNum) {
		slideIndex+=1;
		imgbanner.style.backgroundImage = 'url(img/banner-principal-'+slideIndex+'.jpg)';
		setTimeout(nextSlide, 5000);
	}
	else {
		slideIndex=1;
		imgbanner.style.backgroundImage = 'url(img/banner-principal-'+slideIndex+'.jpg)';
		setTimeout(nextSlide, 5000);
	}
}

function scrollCheck() {
	scrollE = document.getElementById('scrollTop');
	if(window.scrollY<150) {
		scrollE.style.display = 'none';
	}

	else {
		scrollE.style.display = 'flex';
	}
}

function diminuirTexto() {

	if (sizefont>0) {

	sizefont-=1;

	textoh1 = document.getElementsByTagName("h1");
	textoh4 = document.getElementsByTagName("h4");
	textop = document.getElementsByTagName("p");
	textoli = document.getElementsByTagName("li");
	textoa = document.getElementsByTagName("a");

	// h1
	for (let i = 0; i<textoh1.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoh1[i]).fontSize);
    const novoFontSize = fontSizeAtual - 2;
		textoh1[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textoh4.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoh4[i]).fontSize);
    const novoFontSize = fontSizeAtual - 2;
		textoh4[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textop.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textop[i]).fontSize);
    const novoFontSize = fontSizeAtual - 2;
		textop[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textoli.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoli[i]).fontSize);
    const novoFontSize = fontSizeAtual - 2;
		textoli[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textoa.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoa[i]).fontSize);
    const novoFontSize = fontSizeAtual - 2;
		textoa[i].style.fontSize = novoFontSize + "px";
	}

	}
}

function aumentarTexto() {

	if (sizefont<=6) {

	sizefont+=1;

	textoh1 = document.getElementsByTagName("h1");
	textoh4 = document.getElementsByTagName("h4");
	textop = document.getElementsByTagName("p");
	textoli = document.getElementsByTagName("li");
	textoa = document.getElementsByTagName("a");

	// h1
	for (let i = 0; i<textoh1.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoh1[i]).fontSize);
    const novoFontSize = fontSizeAtual + 2;
		textoh1[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textoh4.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoh4[i]).fontSize);
    const novoFontSize = fontSizeAtual + 2;
		textoh4[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textop.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textop[i]).fontSize);
    const novoFontSize = fontSizeAtual + 2;
		textop[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textoli.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoli[i]).fontSize);
    const novoFontSize = fontSizeAtual + 2;
		textoli[i].style.fontSize = novoFontSize + "px";
	}

	for (let i = 0; i<textoa.length;i++) {
		const fontSizeAtual = parseInt(getComputedStyle(textoa[i]).fontSize);
    const novoFontSize = fontSizeAtual + 2;
		textoa[i].style.fontSize = novoFontSize + "px";
	}

	}
}

document.addEventListener("scroll", scrollCheck);
window.addEventListener('resize', updateColspan);
setTimeout(updateColspan, 200);