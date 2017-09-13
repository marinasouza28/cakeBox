
var myIndex = 0;
carousel();



function carousel() {
	
	
	// Tempo de visualização da imagem
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
		}
	    
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 2000);// Tempo de visualização da imagem
	
}

var slideIndex = 1;
showDivs(slideIndex);

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";  
		}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " w3-white";
}
