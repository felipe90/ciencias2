
//huffmanObj
var huffmanObj;

function huffman (str) {
 	this.str = str;
 
    var count_chars = {};
    for (var i = 0; i < str.length; i++) 
        if (str[i] in count_chars) 
            count_chars[str[i]] ++;
        else 
            count_chars[str[i]] = 1;
 
    var pq = new BinaryHeap(function(x){return x[0];});
    for (var ch in count_chars) 
        pq.push([count_chars[ch], ch]);
 
    while (pq.size() > 1) {
        var pair1 = pq.pop();
        var pair2 = pq.pop();
        console.log(pair1+" "+pair2);
        pq.push([pair1[0]+pair2[0], [pair1[1], pair2[1]]]);
    }



    var tree = pq.pop();
    this.encoding = {};
    this._generate_encoding(tree[1], "");
 
    this.encoded_string = ""
    for (var i = 0; i < this.str.length; i++) {
        this.encoded_string += this.encoding[str[i]];
    }

    //to draw the huffman tree
    this.tree=tree;
    

}


huffman.prototype._generate_encoding = function(ary, prefix) {
    if (ary instanceof Array) {
        this._generate_encoding(ary[0], prefix + "0");
        this._generate_encoding(ary[1], prefix + "1");
    }
    else {
        this.encoding[ary] = prefix;
    }
}
 
huffman.prototype.inspect_encoding = function() {
    var encodeResult=[];
    var i=0;
    for (var ch in this.encoding) {
        encodeResult[i]=ch+":"+ this.encoding[ch]+"  ";
        i++;
    }
    return encodeResult;
}
 
huffman.prototype.decode = function(encoded) {
    var rev_enc = {};
    for (var ch in this.encoding) 
        rev_enc[this.encoding[ch]] = ch;
 
    var decoded = "";
    var pos = 0;
    while (pos < encoded.length) {
        var key = ""
        while (!(key in rev_enc)) {
            key += encoded[pos];
            pos++;
        }
        decoded += rev_enc[key];
    }
    return decoded;
}


function drawArray (tree) {
	var h=$("#canvas").css("height");
	var w=$("#canvas").css("width");

	var drawLine = function (x,y,z,w) {
		$("#canvas").drawLine({
		  strokeStyle: '#000',
		  strokeWidth: 1,
		  x1: x, y1: y,
		  x2: z, y2: w,
		});
	}

	var writeText= function (x1,y1,txt) {
		$("#canvas").drawText({
		  fillStyle: '#000',
		  strokeWidth: 1,
		  x: x1, y: y1,
		  fontSize: 10,
		  fontFamily: 'Verdana, sans-serif',
		  text: 'adasd'
		});
	}


    /*
	var stringTree=tree[1].toString();

	console.log(stringTree);
	*/

}



function generateStadistics (e,t) {
    var tBinary="";
	var numberEn=e.length;
    var numberTr=t.length*8;
    var percetCode=(numberEn*100)/numberTr;
    var percetTotal=100-percetCode;
    
    for (i=0; i < t.length; i++) {
        tBinary +=t[i].charCodeAt(0).toString(2) + " ";
    }

    $("#message").append("<p>Sin Comprimir : "+numberTr+" bits "+tBinary+"</p>");
    $("#message").append("<p>Comprimido : "+numberEn+" bits "+e+"  </p>");
    $("#message").append("<p>Codificado : "+percetTotal+" % </p>");
    $("#message").append("<p>Ahorro : "+percetCode+" % </p>");

}



//funcion pricipal, se ejecuta luego de cargar la pagina
$(function () {
	//funcion para agregar nodos
	$("#botonResultado").on("click",function(){
		textNodo=$("#numeroTexto").val();
		huffmanObj=new huffman(textNodo);

		var result=huffmanObj.inspect_encoding()
		$("#resultado").html(result);

		var e = huffmanObj.encoded_string;
		console.log(e);

		var t = huffmanObj.decode(e);
		console.log(t);

		drawArray(huffmanObj.tree);
        generateStadistics (e,t);

	});

});


