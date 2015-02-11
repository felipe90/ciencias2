var textNode;
var nNodos=10;

//defincion de la clase
function node(id,content,left,right,balFact){
	this.id=id;
	this.content=content;
	this.left=left
	this.right=right;
	this.balFact=balFact;
} 

var nodeArray=[];

//init arreglo
function initArray () {

	//numero de nodos iniciales nNodos
	for(var i=0;i<nNodos;i++){
		nodeArray[i]=new node(i,0,0,0,0);
	}
	
}

//crea la tabla
function drawArray () {
	var html = "<table border=1><tr><td>Registro</td><td>Nombre</td><td>Izquierda</td><td>Derecha</td><td>Factor de valace</td></tr>";

	for(var i=0;i<nodeArray.length;i++){
		html = html+"<tr><td>"+nodeArray[i].id+"</td>";
		html = html+"<td>"+nodeArray[i].content+"</td>";
		html = html+"<td>"+nodeArray[i].left+"</td>";
		html = html+"<td>"+nodeArray[i].right+"</td>";
		html = html+"<td>"+nodeArray[i].balFact+"</td>";
		html = html+"</tr>";
	}

	html = html+"</table>";
	
	$("#resultado").html( html );
}

//simple rotacion a la derecha
function simpleRotateRight (p,q) {
		s=nodeArray[p].left;
		nodeArray[p].left=q;
		nodeArray[p].balFact=0;
		nodeArray[q].balFact=0;
		nodeArray[q].right=s;
}

//simple rotacion a la izquierda
function simpleRotateLeft(p,q) {
		s=nodeArray[p].right;
		nodeArray[p].right=q;
		nodeArray[p].balFact=0;
		nodeArray[q].balFact=0;
		nodeArray[q].left=s;
}

//busca e nodo n 
//devuelve un array con la posicion del nodo(p) y el padre(q)

function findNode(n) {
	p=nodeArray[0].content;
	while(p!=0 && n!=nodeArray.content){
		if(n < nodeArray[p].info){
			q=p;
			p=nodeArray[p].left;
		}
		else if(n > nodeArray[p].content){
			q=p;
			p=nodeArray[p].right;
		}
	}
	if(p==0){
		return null;
	}
	else{
		r={p,q};
		return r;
	}
}

//funcion pricipal, se ejecuta luego de cargar la pagina
$(function () {

	initArray(); //init cursor array

	//funcion para agregar nodos
	$("#botonAgregar").on("click",function(){
		textNodo=$("#numeroTexto").val();
		console.log(textNodo);
		
	});

	//funcion para agregar nodos
	$("#botonResultado").on("click",function(){
		drawArray();
	});

});


