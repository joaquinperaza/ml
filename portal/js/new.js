
var noticias = JSON.parse(localStorage.getItem('articulos'));
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function cargar(noticia){
	$('#titulo').html(noticia.titulo);
	$('#autor').html(noticia.categoria+' - Por: '+noticia.autor);
	$('#noticia').html('<img src="'+noticia.img+'" alt="imagen" class="imgNoticia">'+noticia.contenido);
}

// Usage for URL: http://my.site.com/location?locationId=53cc272c0364aefcb78756cd&shared=false
var myId = getUrlVars()["id"];
noticias.forEach(function (item) {
if(item.id==myId){cargar(item);}
});