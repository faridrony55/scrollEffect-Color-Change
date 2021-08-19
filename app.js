function bg(){
 
if(this.scrollY > this.innerHeight / 3){
	document.body.classList.add("bg1"); 
}else {
	document.body.classList.remove("bg1"); 
}


if(this.scrollY > this.innerHeight / 1.5){
	document.body.classList.add("bg2"); 
} else {
	document.body.classList.remove("bg2"); 
}

}
window.addEventListener("scroll", bg);