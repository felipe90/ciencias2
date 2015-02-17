var huffmanArray=new Array();
var menssage;
var huffmanObj;

function huffman (menssage) {
	var huffmanArrayLength;

	//huffman rows
	var SIMBOL=0;
	var FRECUENCY=1;
	var FATHER=2;
	var TYPE=3;
	var LEFT=4;
	var RIGHT=5;

	constructor=huffmanConst(menssage);

}

function huffmanConst (menssage) {
		var i,j;

		var temp=[];
		for (var i = 0; i < 26; i++) {
			temp[i]=0;
		}

		for (var i = 0; i < menssage.length; i++) {
			temp[menssage.charAt(i) - 97]++;
		}

		var huffmanArrayLength=0;

		for (var i = 0; i < 26; i++) {
			if (temp[i]!=0) {
				huffmanArrayLength++;
			}
		}

		var numberCol= huffmanArrayLength*2-1;

		for (var i = 0; i < 6; i++) {
			for (var i = 0; i < numberCol; i++) {
				huffmanArray[i]=new Array();
				huffmanArray[i][j] = 0;
			}
		}

		var j=0;
		for (var i = 0; i < 26; i++) {
			if (temp[i] != 0) {
				huffmanArray[SIMBOL][j]=i; //letter
				huffmanArray[FRECUENCY][j]=temp[i]; //frecuenci
				j++;
			}
		}
}

function decode (argument) {
	// body...
}

function code (argument) {
	// body...
}

function numberSimbols (argument) {
	// body...
}

function listArray (menor) {
	// body...
}

function int (argument) {
	// body...
}



//funcion pricipal, se ejecuta luego de cargar la pagina
$(function () {
	//funcion para agregar nodos
	$("#botonResultado").on("click",function(){
		console.log("huffman");
		textNodo=$("#numeroTexto").val();
		huffmanObj=new huffman(textNodo);
	});

});


