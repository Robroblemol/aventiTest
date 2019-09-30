
function eliminarElemento(id){
	// imagen = document.getElementById(id);	
	// if (!imagen){
	// 	alert("El elemento selecionado no existe");
	// } else {
	// 	padre = imagen.parentNode;
	// 	padre.removeChild(imagen);
	// }
	element = document.getElementById(id);
	father = element.parentNode;
	father.removeChild(element)
}

function screenSize(){
	if (screen.width < 1024 )
		console.log("tamaño de pantalla peque");
	else if (screen.width < 1280 )
		console.log("tamaño de pantalla mediana");
	else
	console.log("tamaño de pantalla grande");
	
}