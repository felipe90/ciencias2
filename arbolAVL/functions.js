var textNode;
var nNodos=10;

var node={
	id:0,
	content:0,
	lefh:0,
	rigth:0,
	valFact:0
} 

var arregloNodos=[];

function initArray () {

	//numero de nodos iniciales nNodos

	nodeAux=node;
	node.id=1;

	for(var i=0;i<nNodos;i++){
		arregloNodos[i]=nodeAux;
		arregloNodos[i].id=i;
	}
	
}

function drawArray () {
	//var html = "<table><tr><td>hello</td></<tr></table>";
	var html = "<table border=1><tr><td>Registro</td><td>Nombre</td><td>Izquierda</td><td>Derecha</td><td>Factor de valace</td></tr</table>";
/*
	for(var i=0;i<nNodos;i++){
		html = html+"";
	}

	html = html+"<table><tr><td>hello</td></<tr></table>";
	*/
	$("#resultado").html( html );
}

$(function () {

	initArray(); //init cursor array

	console.log(arregloNodos.length);

	$("#botonAgregar").on("click",function(){
		textNodo=$("#numeroTexto").val();
		
	});

	$("#botonResultado").on("click",function(){
		drawArray();
	});


});


