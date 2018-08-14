var noticias = JSON.parse(localStorage.getItem('articulos'));

if (noticias == null){
	noticias=[];
	localStorage.setItem("articulos", JSON.stringify(noticias));
}
var one=0;
var two=0;
var first='active';
noticias.sort(function(x, y){
    return y.fecha - x.fecha;
});
noticias.forEach(function (item,index){
if (item.nivel==1 && one<5){
	var countDiv ='<li data-target="#carousel" data-slide-to="'+one.toString()+'" class="'+first+'"></li>';
	var itemDiv = '<div class="carousel-item '+first+'"><a href="noticia.html?id='+item.id+'"><img class="img-responsive cuatro " src="'+item.img+'" alt="'+item.titulo+'"><div class="carousel-caption d-none d-md-block"><h5>'+item.titulo+'</h5><p>'+item.contenido.substring(0, 80)+'... </p></div></a></div>';
	$("#carouselCounter").append(countDiv);
	$("#carouselItems").append(itemDiv);
	first='';
	one++;
}
if (item.nivel==2 && two<4){

var div=['<div class="col-12 col-md-6 col-lg-3 noticia2"><a href="noticia.html?id='+item.id+'"><div class="card zum bg-dark text-white">',
'<img class="card-img imgN2 item2 "  src="'+item.img+'" alt="'+item.titulo+'">',
'<div class="card-img-overlay">',
'<h5 class="card-title">'+item.titulo+'</h5><p class="card-text">'+item.contenido.substring(0, 50)+'... </p><p class="card-text">'+item.categoria+'</p></div></div><a></div>'].join('\n');
$("#g1").append(div);

two++;
} else if(item.nivel==2 && two<8){

var div=['<div class="col-12 col-md-6 col-lg-3 noticia2"><a href="noticia.html?id='+item.id+'"><div class="card zum bg-dark text-white">',
'<img class="card-img imgN2 item2 " src="'+item.img+'" alt="'+item.titulo+'">',
'<div class="card-img-overlay">',
'<h5 class="card-title">'+item.titulo+'</h5><p class="card-text">'+item.contenido.substring(0, 50)+'... </p><p class="card-text">'+item.categoria+'</p></div></div><a></div>'].join('\n');
$("#g1").append(div);

two++;
}
});
$('#carousel').carousel({
  interval: 2000
})

