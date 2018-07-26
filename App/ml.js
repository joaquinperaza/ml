var articulos_lista = JSON.parse(localStorage.getItem('articulos'));

if (articulos_lista==null) {
	articulos_lista=[];
	localStorage.setItem("articulos",JSON.stringify(articulos_lista));
}

$(document).ready(function(){
	$("#save").click(function(){
		guardarArticulo();
	});
});

function guardarArticulo(){
	var title = $("#title").val();
	var imageURL = $("#url").val();
	var precio = $("#precio").val();
	var description = $("#description").val();

	var articulo = {
		title: title,
		imageURL: imageURL,
		precio: precio,
		description: description
	}
	console.log(articulo);
	articulos_lista.push(articulo);
console.log(articulos_lista);
	localStorage.setItem("articulos", JSON.stringify(articulos_lista));
}