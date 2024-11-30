function applyFilter(){
	const html = document.documentElement

	if(localStorage.getItem("tipoDaltonismo") == 2){
		html.style.filter = "brightness(1.1) contrast(0.85) hue-rotate(-45deg)"
	}
	else if(localStorage.getItem("tipoDaltonismo") == 3){
		html.style.filter = "brightness(1.1) contrast(0.85) hue-rotate(-25deg)"
	}
	else if(localStorage.getItem("tipoDaltonismo") == 4){
		html.style.filter = "brightness(1.2) contrast(0.9) hue-rotate(90deg)";	
	}
	else{
		html.style.filter = "none"
	}
}

export default applyFilter;