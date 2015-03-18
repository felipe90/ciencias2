var esObj;

//encadenamiento separado
function eSeparado(m){
    this.m=m;
    this.array=new Array();

}

eSeparado.prototype.initArray=function () {

    for (var i = 0; i < this.m; i++) {
        this.array[i]=0;   
    }
}

eSeparado.prototype.dispSepar=function (llave) {
    var h,i,k;

    console.log("hecho");

    h=(llave%this.m);

    if (this.array[h]==0) {
        this.array[h]=llave;
        return 1;
    }//insercion exitosa

    i=0;
    while(i<this.array.length){
        if(this.array[i]==llave) {
            return 0;
        }//llave ya existe
        i++;
    }

    i=0;

    while (this.array[h]!=0 && i<this.m) {
        i++;
    }//debe hacer rehash

    if (i==this.pruebas) {
        return -1;
    }//debe hacer rehash
}

eSeparado.prototype.mostrarTabla=function() {
   var html="<table>";
    html=html+"<tr>";
    for (var i = 0; i < this.m; i++) {
        html=html+"<td>"+this.array[i]+"</td>";        
    }
    html=html+"</tr>";
    html=html+"</table>"; 

    return html;
}

eSeparado.prototype.rehash=function(array) {

   for (var i = 0; i < array.length; i++) {
       this.dispSepar(array[i].llave);
   }
}

eSeparado.prototype.listar=function () {
    var html="";
    for (var i = 0; i < this.m; i++) {
        html+="<p>("+i+") Llave: "+this.array[i];
        html+="</p>";
    }   
    return html;  
}

eSeparado.prototype.getArray=function () {
    return this.array;
}

$(function () {
    //funciones respuesta ES
    $("#btonInitES").on("click",function(){
         m=window.prompt("Inserte el numero maximo de llaves","");
        
        if(primo(m)){
            esObj=new eSeparado(m);
            esObj.initArray();
            var html=esObj.mostrarTabla();
            $("#contenido-ES").html(html);
            $("#mensaje-ES").html("Inicializado...");    
        }
        else{
            $("#contenido-ES").html("");
            $("#mensaje-ES").html("No es primo o no es una longitud valida...");
        }
    });

    $("#btonListES").on("click",function(){
         var html=esObj.mostrarTabla();
         html+=esObj.listar();

         $("#contenido-ES").html(html); 
    });

    $("#btonInsertES").on("click",function(){
        var key=$("#textES").val();
        if(key!=""){
            var res=esObj.dispSepar(key);
            var html=esObj.mostrarTabla();

            $("#contenido-ES").html(html);
            if(res==-1){
                $("#mensaje-ES").html("Tabla llena, debe hacer re-hash..."); 
            }else if (res==0){
                $("#mensaje-ES").html("Llave ya existe...");
            }else if (res==1) {
                $("#mensaje-ES").html("Llave insertada con exito..."); 
            }
        }
        else
        {
            $("#mensaje-ES").html("Valor de llave invalido...");      
        }

    });

    $("#btonRehasES").on("click",function(){
        var reObj;
        m=window.prompt("Inserte el nuevo numero maximo de llaves","");
        
        if(primo(m)){
            reObj=new eSeparado(m);
            reObj.initArray();
            reObj.rehash(esObj.getArray());
            esObj=reElObj; //reemplazar por el auxiliar
            var html=elObj.mostrarTabla();
            $("#contenido-ES").html(html);
            $("#mensaje-ES").html("Rehash completado...");    
        }
        else{
            $("#contenido-ES").html("");
            $("#mensaje-ES").html("No es primo o no es una longitud valida...");
        }        
    });
    
});