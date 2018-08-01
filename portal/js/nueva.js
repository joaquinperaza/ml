var noticias = JSON.parse(localStorage.getItem('articulos'));

if (noticias == null){
	noticias=[];
	localStorage.setItem("articulos", JSON.stringify(noticias));
}
function save(){
		if($("#nuevaForm").valid()){
	noticias.sort(function(x, y){
		return y.id - x.id;
	});
	var id=noticias[0].id+1;
	var noticia={
		id: id,
		fecha: Date.now(),
		titulo: $("#title").val(),
		autor: $("#autor").val(),
		nivel: $("#nivel").val(),
		categoria: $("#sel1").val(),
		img: $("#URL").val(),
		contenido: $("#description").val()
	}
	noticias.push(noticia);
	localStorage.setItem("articulos", JSON.stringify(noticias));
}

}
$(document).ready(function(){
	$("#nuevaForm").submit(save);
	$("#nuevaForm").validate({
		rules: {
			titulo: "required",
			precio: {
				required: true,
				number: true
			},
			desc: "required",
			url: {
				required: true,
				url: true
			},
			name: "required",
			autor: "required",
			select: "required"
    // compound rule
},
    //Mensajes que quiero mostrar
    messages: {
    	titulo: "Falta el titulo del articulo.",
    	precio: "El precio no es valido.",
    	desc: "Falta descripción.",
    	autor: "Falta el autor.",
    	url: "URL invalida.",
    	select: "Categoria?"   	
    }
});
});
