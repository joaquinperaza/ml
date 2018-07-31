

var articulos_lista = JSON.parse(localStorage.getItem('articulos'));

if (articulos_lista == null){
	articulos_lista=[];
	localStorage.setItem("articulos", JSON.stringify(articulos_lista));
}

$(document).ready(function(){
	$("#publicarForm").submit(GuardarArt);
});
$(function() {
	$.validator.addMethod("cedulavalida", function(value) {
		return validate_ci(value);
}, 'Cedula invalida!');
	
	$("#publicarForm").validate({
		rules: {
			titulo: "required",
			precio: {
				required: true,
				number: true
			},
			desc: "required",
			url: "cedulavalida",
			name: "required",
    // compound rule
},
    //Mensajes que quiero mostrar
    messages: {
    	titulo: "Falta el titulo del articulo",
    	precio: "El precio no es valido",
    	desc: "Falta descripción",
    	url: "ci invalida",
    	
    }
});
});

function validation_digit(ci){
	
  var a = 0;
  var i = 0;
  if(ci.length <= 6){
    for(i = ci.length; i < 7; i++){
      ci = '0' + ci;
    }
  }
  for(i = 0; i < 7; i++){
    a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
  }
  if(a%10 === 0){
    return 0;
  }else{
    return 10 - a % 10;
  }
}

function validate_ci(cin){
  ci = clean_ci(cin.toString());
  var dig = ci[ci.length - 1];
  ci = ci.replace(/[0-9]$/, '');
  return (dig == validation_digit(ci));
}

function clean_ci(ci){
  return ci.replace(/\D/g, '');
}



function GuardarArt(){
	if($("#publicarForm").valid()){
		var id_last;
		if(localStorage.getItem('idlast')==null){
			id_last = 0;
		} else {
			id_last = parseInt(localStorage.getItem('idlast'))+1;
		}
		var titulo = $("#title").val();
		var URL = $("#URL").val();
		var precio = $("#price").val();
		var description = $("#description").val();
		var articulo = {
			nombre: title,
			imagen: URL,
			precio: price,
			dec: description,
			id: id_last
		};
		localStorage.setItem("idlast",id_last.toString());
		articulos_lista.push(articulo);
		localStorage.setItem("articulos", JSON.stringify(articulos_lista));
		$("#title").val("");
		$("#URL").val("");
		$("#price").val("");
		$("#description").val("");

		var alerta = ['<div class="alert alert-success alert-dismissible fade show" role="alert">',
		'<strong>Se ha guardado correctamente el articulo!</strong>',
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
		'<span aria-hidden="true">&times;</span>',
		'</button>',
		'</div>'].join('\n');
		$('#div_mensajes').append(alerta);	
	}
}

