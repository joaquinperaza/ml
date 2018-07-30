

 var articulos_lista = JSON.parse(localStorage.getItem('articulos'));
 if (articulos_lista == null){
  articulos_lista=[];
  localStorage.setItem("articulos", JSON.stringify(articulos_lista));
 }

 $(document).ready(function(){
 $("#save").click(function(){
  GuardarArt();
 });

 });

 function GuardarArt(){

  var titulo = $("#title").val();
  var URL = $("#URL").val();
 var Precio = $("#price").val();
  var Descrip = $("#description").val();

  var articulo = {
      nombre: title,
      imagen: URL,
      precio: price,
      dec: description,
       }

       articulos_lista.push(articulo);

       localStorage.setItem("articulos", JSON.stringify(articulos_lista));
      
$("#title").val("");
$("#URL").val("");
$("#price").val("");
 $("#description").val("");
   

    // $(".alert").alert('close')
var alerta = ['<div class="alert alert-success alert-dismissible fade show" role="alert">',
                  '<strong>Se ha guardado correctamente el articulo!</strong>',
                  '<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
                  '<span aria-hidden="true">&times;</span>',
                  '</button>',
                  '</div>'].join('\n');
      $('#div_mensajes').append(alerta);
 }