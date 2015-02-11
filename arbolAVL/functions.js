var textNode;
var nNodos=10;

//defincion de la clase
function node(id,content,left,right,valFact){
	this.id=id;
	this.content=content;
	this.lefth=left;
	this.rigth=right;
	this.valFact=valFact;
} 

var arregloNodos=[];

function initArray () {

	//numero de nodos iniciales nNodos
	for(var i=0;i<nNodos;i++){
		arregloNodos[i]=new node(i,0,0,0,0);
	}
	
}

function drawArray () {
	//var html = "<table><tr><td>hello</td></<tr></table>";
	var html = "<table border=1><tr><td>Registro</td><td>Nombre</td><td>Izquierda</td><td>Derecha</td><td>Factor de valace</td></tr>";

	for(var i=0;i<arregloNodos.length;i++){
		html = html+"<tr><td>"+arregloNodos[i].id+"</td>";
		html = html+"<td>"+arregloNodos[i].content+"</td>";
		html = html+"<td>"+arregloNodos[i].lefth+"</td>";
		html = html+"<td>"+arregloNodos[i].rigth+"</td>";
		html = html+"<td>"+arregloNodos[i].valFact+"</td>";
		html = html+"</tr>";
	}

	html = html+"</table>";
	
	$("#resultado").html( html );
}

$(function () {

	initArray(); //init cursor array

	$("#botonAgregar").on("click",function(){
		textNodo=$("#numeroTexto").val();
		console.log(textNodo);
		
	});

	$("#botonResultado").on("click",function(){
		drawArray();
	});


});


