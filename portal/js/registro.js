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

function validate_ci(ci){
  ci = clean_ci(ci);
  var dig = ci[ci.length - 1];
  ci = ci.replace(/[0-9]$/, '');
  return (dig == validation_digit(ci));
}
function clean_ci(ci){
  return ci.replace(/\D/g, '');
}

function validate_isRUT(rut)
{
  if (rut.length != 12){
    return false;
  }
  if (!/^([0-9])*$/.test(rut)){
               return false;
    }
  var dc = rut.substr(11, 1);
  var rut = rut.substr(0, 11);
  var total = 0;
  var factor = 2;
 
  for (i = 10; i >= 0; i--) {
    total += (factor * rut.substr(i, 1));
    factor = (factor == 9)?2:++factor;
  }
 
  var dv = 11 - (total % 11);
 
  if (dv == 11){
    dv = 0;
  }else if(dv == 10){
    dv = 1;
  }
  if(dv == dc){
    return true;
  }
  return false;
}

function documentovalido(valor,elemento){
if($("#inputState").val()=="RUT")
    return validate_isRUT(valor.toString());
if($("#inputState").val()=="CI")
    return validate_ci(valor);
if($("#inputState").val()=="OTRO")
    return true;
}

$( document ).ready(function() {
jQuery.validator.addMethod("doc", documentovalido, "Su documento es invalido!");
$("#nuevaForm").validate({
    errorElement: "label",
		rules: {  
			documento:
			{
				doc: true
			},
			name: "required",
			tel: {
				required: true,
				number: true
			},
			mail: {
				required: true,
				email: true
			},
			cont1: "required",
			cont2: "required"

    // compound rule
},
    //Mensajes que quiero mostrar
    messages: {
    	
    	documento: "Su documento no es valido.",
    	mail: "Su email no es valido",
    	name: "Por favor ingrese su nombre",
    	tel: "Numero invalido",
    	customFile: "Agregue una imagen",
    	cont1: "Clave invalida",
    	cont2: "Clave invalida",
    }
});
});