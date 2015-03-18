var textNode;
var nNodos=10;

//defincion de la clase
function node(id,content,left,right,balFact){
	this.id=id;
	this.content=parseInt(content);
	this.left=parseInt(left);
	this.right=parseInt(right);
	this.balFact=parseInt(balFact);
} 

var nodeArray=[];

//init arreglo
function initArray () {
	
	var i;
	//numero de nodos iniciales nNodos
	for(i=0;i<nNodos;i++){
		nodeArray[i]=new node(i,0,0,i+1,0);
	}

	nodeArray[i-1].left = 0;
}

//captura un numero para ingresarlo como un nodo
function capture (text) {
	n=parseInt(text);
	if(insertValue(n)== -1){
		printMessage ("Repetido...");
	}else
	{
		printMessage ("Insertado...");

	}
}

//consulta un numero en el arbol
function consult (text) {
	n=parseInt(text);
	if(consultValue(n)== -1){
		printMessage ("No existe. Trate otra vez...");
	}else
	{
		printMessage ("Si existe...");
	}
}

//elimina un nodo del arbol
function remove (text) {
	n=parseInt(text);
	if(deleteValue(n)== -1){
		printMessage ("No existe. Trate otra vez...");
	}else
	{
		printMessage ("Retirado... ");
	}
}

//inserta un nuevo nodo en el arbol
function insertValue(n) {

	var nuevo,p,q,s,pivot,pp,key,height;

	nuevo = disp ();
	console.log(nuevo);
	nodeArray[nuevo].content = n;
	nodeArray[nuevo].balFact = 0;
	nodeArray[nuevo].left = 0;
	nodeArray[nuevo].right = 0;

	if (nodeArray[0].left == 0) {
		nodeArray[0].left = nuevo;
		return 0; /* Se inserto correctamente */
	}

	pp = 0; 
	q = 0;

	p = nodeArray[0].left;
	pivot = nodeArray[0].left;
	key = nodeArray[nuevo].content;

	while (p != 0) {
		if (nodeArray[p].balFact) {
			pp = q;
			pivot = p;
		}
		if (key == nodeArray[p].content) {
			liberar (nuevo);
			return -1;  /* Ya existe */
		}
		else {
			q = p;
			if (key < nodeArray[p].content){
				p = nodeArray[p].left;
			}
			else
			{ 
				p = nodeArray[p].right;
			}
		}
	}

	if (key < nodeArray[q].content){
		nodeArray[q].left = nuevo;
	}
	else{
		nodeArray[q].right = nuevo;
	}

	if (key < nodeArray[pivot].content) {
		s = nodeArray[pivot].left;
		height = 1;
	}
	else {
		s = nodeArray[pivot].right;
		height = -1;
	}


	p=s;
	while (p != nuevo){
		if (key < nodeArray[p].content) {
			nodeArray[p].balFact = 1;
			p = nodeArray[p].left;
		}
		else {
			nodeArray[p].balFact = -1;
			p = nodeArray[p].right;
		}
	}

	if (nodeArray[pivot].balFact == 0){
		nodeArray[pivot].balFact = height;
	}
	else if (nodeArray[pivot].balFact + height == 0){
		nodeArray[pivot].balFact = 0;
	}
	else {
		if (height == 1){
			if (nodeArray[s].balFact == 1){
				simpleRotateRight (pivot, s);
			}
			else{ 
				doubleRotateRigth (pivot,s);
			}
		}
		else if (nodeArray[s].balFact == -1){
			simpleRotateLeft (pivot,s);
		}
		else{ 
			doubleRotateLeft (pivot, s);
		}
		
		if (pp == 0){
			nodeArray[0].left = s;
		}
		else if (nodeArray[pp].left == pivot){
			nodeArray[pp].left = s;
		}
		else{
			nodeArray[pp].right = s;
		}
	}

	return 0;  /* Se inserto correctamente */	
}

//determian si es el primer nodo del arbol
//sino devueleve el nodo de la derecha
function disp () {
	var i = nodeArray[0].right;

	if (i == 0){
		return -1;
	}
	else {
		nodeArray[0].right = nodeArray[i].right;
		return i;
	}
}

// libera la posicion y reasigna la raiz
function liberar (p) {
	nodeArray[p].content = 0;
	nodeArray[p].right = nodeArray[0].right;
	nodeArray[0].right = p;
}

//simple rotacion a la derecha
function simpleRotateRight (p,q) {
	nodeArray[p].balFact = 0;
	nodeArray[q].balFact = 0;
	nodeArray[p].left = nodeArray[q].right;
	nodeArray[q].right = p;
}

//simple rotacion a la izquierda
function simpleRotateLeft(p,q) {
	nodeArray[p].balFact = 0;
	nodeArray[q].balFact = 0;
	nodeArray[p].right = nodeArray[q].left;
	nodeArray[q].left = p;
}

//doble rotacion a la izquierda
function doubleRotateRigth (p,q) {
	var r= nodeArray[q].right;
	nodeArray[q].right = nodeArray[r].left;
	nodeArray[r].left = q;
	nodeArray[p].left = nodeArray[r].right;
	nodeArray[r].right = p;

	if(nodeArray[r].balFact==-1) {
		nodeArray[q].balFact = 1;
		nodeArray[p].balFact = 0;
	}
	else if(nodeArray[r].balFact==0){
	  	nodeArray[q].balFact = 0;
	  	nodeArray[p].balFact = 0;
	}
	else if(nodeArray[r].balFact==1){
		nodeArray[q].balFact = 0;
		nodeArray[p].balFact = -1;
	}
	nodeArray[r].balFact = 0;
	q = r;
}

//doble rotacion a la derecha
function doubleRotateLeft (p,q) {
	var r= nodeArray[q].left;

	nodeArray[q].left = nodeArray[r].right;
	nodeArray[r].right = q;
	nodeArray[p].right = nodeArray[r].left;
	nodeArray[r].left = p;

	if(nodeArray[r].balFact==-1) {
		nodeArray[q].balFact = 0;
		nodeArray[p].balFact = 1;
	}
	else if(nodeArray[r].balFact==0){
	  	nodeArray[q].balFact = 0;
	  	nodeArray[p].balFact = 0;
	}
	else if(nodeArray[r].balFact==1){
		nodeArray[q].balFact = -1;
		nodeArray[p].balFact = 0;
	}
	nodeArray[r].balFact = 0;
	q = r;
}

//consulta un nodo en el arbol
function consultValue (n) {
	var p,enc = 0;

	p = nodeArray[0].left;
	while ( p != 0 && !enc) {
		if (n < nodeArray[p].content)
			p = nodeArray[p].left;
		else if (n > nodeArray[p].content)
			p = nodeArray[p].right;
		else enc = 1;
	}
	if (enc != 1){
		return (-1);
	}else 
	{
		return (p);
	}
}

function printMessage (text) {
	$("#message").html(text);
}

//crea la tabla para dibuajr en el frontend
function drawArray () {
	var html = "<table border=1><tr><td>Registro</td><td>Contenido</td><td>Izquierda</td><td>Derecha</td><td>Factor de Balace</td></tr>";

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

//busca e nodo n 
//devuelve un array con la posicion del nodo(p) y el padre(q)

function findNode(n) {
	p=nodeArray[0].content;
	while(p!=0 && n!=nodeArray.content){
		if(n < nodeArray[p].content){
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
		capture(textNodo);
		
	});

	//funcion para agregar nodos
	$("#botonResultado").on("click",function(){
		drawArray();
	});

});


