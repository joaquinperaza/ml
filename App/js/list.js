

var articulos_lista = JSON.parse(localStorage.getItem('articulos'));
if (articulos_lista == null){
	articulos_lista=[];
	localStorage.setItem("articulos", JSON.stringify(articulos_lista));
}

articulos_lista.forEach(function (articulo) {



});



function displayItem(nombre, precio, desc, img, id){
	var card = '<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+img+'" alt="Card image cap"><div class="card-body"> <h5 class="card-title">'+titulo+'</h5><p class="card-text">'+desc+'</p><a href=producto.html?id="'+id+'" class="btn btn-primary">Go somewhere</a></div></div>';
}