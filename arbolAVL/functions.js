var textNode;

var node={
	id:0,
	content:0,
	lefh:0,
	rigth:0,
	valFact:0
} 

var arregloNodos=[];

function initArray () {
	nodeAux=node;
	node.id=1;
	arregloNodos[0]=nodeAux;	
}

$(function () {

	initArray(); //init cursor array

	console.log(arregloNodos[0].id);

	$("#botonAgregar").on("click",function(){
		textNodo=$("#numeroTexto").val();
		
	});


});


