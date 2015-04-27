var cuObj;



//dispercion Cuadratica
function cubeta(m){
    this.llaves=new Array();
    this.array=new Array();
    this.m=m;
    this.conta=new Array();
    this.n=2; //valor constante, cantidad de filas de la cubeta
    this.insertados=0 //temp de insercion
    this.exp=0;
    this.mod=0;
    this.ind=0;
}

cubeta.prototype.initArray=function () {

    for (var i = 0; i < this.m; i++) {
        this.array[i]=new Array(); 
    }    

    for (var i = 0; i < this.m; i++) {
        for (var j = 0; j <= this.n; j++) {
            this.array[i][j]=0;        
        }  
    }

    for (var i = 0; i <= this.n; i++) {
        this.conta[i]=0; 
    }    
}

cubeta.prototype.crearCubeta=function(){
    
    
    while(this.insertados!=this.llaves.length){
       this.initArray();//inicializa la cubeta
        //inserta las llaves
        for(var j=0;j<this.llaves.length;j++){
            this.exp=parseFloat( this.insertados/(this.n*3) );
            if(this.exp<0.80){
                this.mod=this.llaves[j]%this.n;
                this.ind=this.conta[this.mod];
                if(this.ind<3){
                    this.array[this.ind][this.mod]=this.llaves[j];
                    this.conta[this.mod]++;
                    this.insertados++;
                    continue;
                }
            }
            this.insertados=0;
            /// expansion total;
            this.n=this.n*2;
            break;
        }

    }
}

cubeta.prototype.pruebaCubeta=function (llave) {
    for (var i = 0; i < this.llaves.length; i++) {
        if(this.llaves[i]==llave){
            return 0;
        }//la llave ya existe
    }

    this.llaves[this.llaves.length]=llave;
    console.log(this.llaves);
    this.crearCubeta();
    return 1;
    //llave insertada con existo    
}

cubeta.prototype.rehash=function(array) {
    //el array hace rehash automaticamente si es necesario
   //posible rehash mediande expansion parcial
}

cubeta.prototype.mostrarTabla=function() { 

    console.log(this.array);
    var html="<table>";
    
    for (var i = 0; i < this.array.length; i++) {
        html=html+"<tr>";
        for (var j = 0; j <= this.n; j++) {
            html=html+"<td>"+this.array[i][j]+"</td>";
        }
        html=html+"</tr>";
    }
    
    html=html+"</table>"; 
    return html;
}

cubeta.prototype.listar=function () {
    var html="";
    for (var i = 0; i < this.m; i++) {
        html+="<p>("+i+") Llave: "+this.array[i];
        html+="</p>";
    }   
    return html;  
}

cubeta.prototype.getArray=function () {
    return this.array;
}


$(function () {
    
    //funciones respuesta Dispercion Cuadratica
    $("#btonInitCU").on("click",function(){
        m=window.prompt("Inserte el numero maximo de llaves","");
        
        if(primo(m)){
            cuObj=new cubeta(m);
            cuObj.initArray();
            var html=cuObj.mostrarTabla();
            $("#contenido-CU").html(html);
            $("#mensaje-CU").html("Inicializado...");    
        }
        else{
            $("#contenido-CU").html("");
            $("#mensaje-CU").html("No es primo o no es una longitud valida...");
        }
            
    });

    $("#btonListCU").on("click",function(){
         var html=cuObj.mostrarTabla();
         html+=cuObj.listar();

         $("#contenido-CU").html(html);         
    });

    $("#btonInsertCU").on("click",function(){
        var key=$("#textCU").val();

        if(key!=""){
            var res=cuObj.pruebaCubeta(key);
            var html=cuObj.mostrarTabla();
            $("#contenido-CU").html(html);
            if(res==-1){
                $("#mensaje-CU").html("Tabla llena, debe hacer re-hash..."); 
            }else if (res==0){
                $("#mensaje-CU").html("Llave ya existe...");
            }else if (res==1) {
                $("#mensaje-CU").html("Llave insertada con exito...");
            }    
        }
        else{
            $("#mensaje-CU").html("Valor de llave invalido...");           
        }    
    });

    $("#btonRehasCU").on("click",function(){
        var reObj;
        m=window.prompt("Inserte el nuevo numero maximo de llaves","");
        
        if(primo(m)){
            reObj=new cubeta(m);
            reObj.initArray();
            reObj.rehash(cuObj.getArray());
            dObj=reObj; //reemplazar por el auxiliar
            var html=cuObj.mostrarTabla();
            $("#contenido-CU").html(html);
            $("#mensaje-CU").html("Rehash completado...");    
        }
        else{
            $("#contenido-CU").html("");
            $("#mensaje-CU").html("No es primo o no es una longitud valida...");
        }     
    });
});