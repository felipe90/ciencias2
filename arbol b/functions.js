var pagArray=[]; //arreglo paginas
var nPaginas=10; //nuemor de paginas del arbol
var orden=2; //orden del arbol b


//extends Array
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};


function pagina(){
	var cont;
	var llavesArray;
	var apuntadoresArray;
}

pagina.prototype.insertLLave=function(llave){
	
	if(this.llavesArray[0]==0){
		this.llavesArray[0]=llave;
		this.cont++;
	}
	else{
		for (var i = 0; i < this.llavesArray.length; i++) {
			if(this.llavesArray[i]!=0){
				this.llavesArray[i]=llave;
				this.cont++;
				break;
			}
		}	
	}
	
	this.llavesArray.sort(function(a,b){return a-b});
}

pagina.prototype.insertApuntador=function(apuntador){
	
	console.log(apuntador);
	if(this.apuntadoresArray[0]==0){
		this.apuntadoresArray[0]=apuntador;
	}
	else{
		
		for (var i = 0; i < this.apuntadoresArray.length; i++) {
			if(this.apuntadoresArray[i]!=0){
				this.apuntadoresArray[i]=apuntador;
				break;
			}
		}	
	}
	this.apuntadoresArray.sort(function(a,b){return a-b});
}

pagina.prototype.initArrays = function() {
	
	for (var i = 0; i < orden*2; i++) {
		this.llavesArray[i]=0;
	}

	for (var i = 0; i < (orden*2)+1; i++) {
		this.apuntadoresArray[i]=0;
	}
}

pagina.prototype.initCursor=function(){
	this.llavesArray=[];
	this.apuntadoresArray=[];
	this.initArrays();	
}

//-----------funciones Arbol


function ajustarProximoDisponible(nproximo){
	pagArray[0].apuntadoresArray[orden*2]=nproximo;
}

function ajustarRaiz(nraiz){
	pagArray[0].cont=nraiz;
}

function getRaiz(){
	return pagArray[0].cont;
}

function getProximo () {
	return pagArray[0].apuntadoresArray[orden*2];
}

function initArray(){
	for (var i = 0; i < nPaginas; i++) {
		pagArray[i]=new pagina();
		pagArray[i].cont=0;
		pagArray[i].initCursor();
	}

	for (var i = 0; i < nPaginas; i++) {
		pagArray[i].apuntadoresArray[orden*2]=i+1;
	}
}

function revisarDisponivilidad(llave){
	for (var i = 0; i < pagArray.length; i++) {
		for (var j = 0; j < pagArray[i].llavesArray.length; j++) {
			if(pagArray[i].llavesArray[j]==llave){
				console.log("ya esta en el arbol");
				return true; //la llave ya esta en el arbol
			}
		}
	}
	return false;
}

//rompe una pagina, reasigna las llaves y los apuntadores
function romperPagina(nPagina,llave){
	var np=nPagina;
	var tempPaginas=[];
	var tempLlaves=pagArray[np].llavesArray.slice(0);

	
	for (var i = 0; i < 3; i++) {
		tempPaginas[i]=new pagina();
		tempPaginas[i].cont=0;
		tempPaginas[i].initCursor();
	}

	//insertar el valor en un array nuevo y ordenarlo
	tempLlaves.push(llave);
	tempLlaves.sort(function(a,b){return a-b});
	//dividir el nuevo array
	//asignar la informacion a las paginas temporales

	for (var i = 0; i < tempLlaves.length; i++) {
		if(i<orden)
			tempPaginas[0].insertLLave(tempLlaves[i]);
		if(i>orden)
			tempPaginas[1].insertLLave(tempLlaves[i]);
		if(i==orden)
			tempPaginas[2].insertLLave(tempLlaves[i]);
	}
	
	console.log(tempPaginas);

	return tempPaginas.slice(0);
}

//reordena el arbol luego de romper una pagina
function balancearArbol(nPagina, llave) {

	//cambiar la raiz y el proximo disponible
	var tempPag=romperPagina(nPagina,llave);
	var n=getProximo();

	//ajustar contenido
	pagArray[n]=tempPag[2];
	pagArray[n-1]=tempPag[1];
	pagArray[n-2]=tempPag[0];

	//ajustar apuntador
	pagArray[n].insertApuntador(n-1);
	pagArray[n].insertApuntador(n-2);

	//ajustar raiz y proximo disponible
	ajustarProximoDisponible(n);

	for (var i = 0; i < pagArray.length; i++) {
		if(pagArray[i].cont==0){
			ajustarProximoDisponible(i);
			break;
		}
	}

	ajustarRaiz(n);
}

var tempApuntadores;

function comprovarHoja(llave,nPagina) {
	
	var tempHoja;
	var tempPag=pagArray.slice(0);
	var i=nPagina;//indice de hoja
	tempApuntadores=tempPag[i].apuntadoresArray.slice(0);//lista apuntadores de la hoja

	var max=tempPag[i].llavesArray.max();
	var min=tempPag[i].llavesArray.min();


	return i; //retornar el valor de la pagina a insertar el valor
}


function insertarArbol(llave){

	var pagtemp;
	var esHoja=comprovarHoja(llave,getRaiz());

	console.log("hojaID="+esHoja);

	if(!revisarDisponivilidad(llave)){

		if(pagArray[1].llavesArray[orden*2-1]==0){
			pagArray[1].insertLLave(llave);
			pagArray[1].apuntadoresArray[orden*2]=0;
			pagArray[1].cont=1;
			ajustarProximoDisponible(3);
			ajustarRaiz(1);
			console.log("normal-1");
			return;
		} //primera insercion
		else{
			if(esHoja!=0){
				if(pagArray[esHoja].cont<4){
					pagArray[esHoja].insertLLave(llave);
					console.log("normal-hoja");
				}else{
					balancearArbol(getRaiz(),llave);
					console.log("bal-hoja");	
				}
			}else if(pagArray[getRaiz()].cont<4){
				pagArray[getRaiz()].insertLLave(llave);
				console.log("normal");
			}else{
				balancearArbol(getRaiz(),llave);
				console.log("bal");
			}
		}	
	}
}


//crea la tabla para dibujar en el frontend
function drawArray () {
	var html = "<table border=1><tr><td>Reg.</td><td>Con.</td><td>Llaves</td><td>Apuntadores</td></tr>";

	for(var i=0;i<pagArray.length;i++){
		html = html+"<tr><td>"+i+"</td>";
		html = html+"<td>"+pagArray[i].cont+"</td>";
		
		html = html+"<td>";
		for (var j = 0; j < pagArray[i].llavesArray.length; j++) {
			html=html+pagArray[i].llavesArray[j]+" ";
		}
		html = html+"</td>";

		html = html+"<td>";
		for (var h = 0; h < pagArray[i].apuntadoresArray.length; h++) {
			html=html+pagArray[i].apuntadoresArray[h]+" ";
		}
		html = html+"</td>";

		html = html+"</tr>";
	}

	html = html+"</table>";
	
	var raiz=0;

	//busca la raiz
	for (var i = 0; i < pagArray.length; i++) {
		if (pagArray[i].cont==1) {
			raiz=pagArray[i].cont;
			break;
		}
	}

	info= "Raíz= "+raiz+" Próximo Disponible= "+pagArray[0].apuntadoresArray[orden*2];

	$("#arbolInfo").html(info)
	$("#resultado").html(html);
}

//funcion pricipal, se ejecuta luego de cargar la pagina
$(function () {

	initArray(); //init cursor arrays

	//funcion para agregar nodos
	$("#botonAgregar").on("click",function(){
		textLlave=$("#numeroTexto").val();
		insertarArbol(textLlave);
		$("#numeroTexto").val("");
	});

	//funcion para agregar nodos
	$("#botonResultado").on("click",function(){
		drawArray();
	});

});


