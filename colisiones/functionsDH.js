var dObj;


//dispercion Cuadratica
function dispCuadratica(m){
    this.array=new Array();
    this.pruebas=(m+1)/2;
    this.m=m;
}

dispCuadratica.prototype.initArray=function () {

    for (var i = 0; i < this.m; i++) {
        this.array[i]=0; 
    }    

    console.log(this.array);
}

dispCuadratica.prototype.pruebaCuad=function (llave) {
    var h,i,k;

    console.lod(llave);
    h=(llave%this.m)%this.m;

    if (this.array[h]==0) {
        this.array[h]=llave;
        return 1;
    }//insercion exitosa

    for(var i=0;i<this.m;i++){
        if(this.array[i]==llave){
            return 0;
        }
    }//la llave ya existe

    i=1;
    k=h;

    while(this.array[h]!=0 && i<this.pruebas){
        h=(k+i*i)%m;
        i++;
    }//revisa el arreglo



    if (i==this.pruebas) {
        return -1;
    }//debe hacer rehash

    this.array[h]=llave;
    return 1;
}

dispCuadratica.prototype.rehash=function(array) {
   for (var i = 0; i < array.length; i++) {
       this.pruebaCuad(array[i]);
   }
}

dispCuadratica.prototype.mostrarTabla=function() {

    var html="<table>";
    html=html+"<tr>";
    for (var i = 0; i < this.m; i++) {
        html=html+"<td>"+this.array[i]+"</td>";        
    }
    html=html+"</tr>";
    html=html+"</table>"; 

    return html;
}

dispCuadratica.prototype.listar=function () {
    var html="";
    for (var i = 0; i < this.m; i++) {
        html+="<p>("+i+") Llave: "+this.array[i];
        html+="</p>";
    }   
    return html;  
}

dispCuadratica.prototype.getArray=function () {
    return this.array;
}


$(function () {
    //funciones respuesta Dispercion Cuadratica
    $("#btonInitDH").on("click",function(){
        m=window.prompt("Inserte el numero maximo de llaves","");
        
        if(primo(m)){
            dObj=new dispCuadratica(m);
            dObj.initArray();
            var html=dObj.mostrarTabla();
            $("#contenido-DH").html(html);
            $("#mensaje-DH").html("Inicializado...");    
        }
        else{
            $("#contenido-DH").html("");
            $("#mensaje-DH").html("No es primo o no es una longitud valida...");
        }
            
    });

    $("#btonListDH").on("click",function(){
         var html=dObj.mostrarTabla();
         html+=dObj.listar();

         $("#contenido-DH").html(html);         
    });

    $("#btonInsertDH").on("click",function(){
        var key=$("#textDH").val();

        if(key!=""){
            var res=dObj.pruebaCuad(key);
            var html=dObj.mostrarTabla();
            $("#contenido-DH").html(html);
            if(res==-1){
                $("#mensaje-DH").html("Tabla llena, debe hacer re-hash..."); 
            }else if (res==0){
                $("#mensaje-DH").html("Llave ya existe...");
            }else if (res==1) {
                $("#mensaje-DH").html("Llave insertada con exito...");
            }       
        }
        else{
            $("#mensaje-DH").html("Valor de llave invalido...");
        }    
    });

    $("#btonRehasDH").on("click",function(){
        var reObj;
        m=window.prompt("Inserte el nuevo numero maximo de llaves","");
        
        if(primo(m)){
            reObj=new dispCuadratica(m);
            reObj.initArray();
            reObj.rehash(dObj.getArray());
            dObj=reObj; //reemplazar por el auxiliar
            var html=dObj.mostrarTabla();
            $("#contenido-DH").html(html);
            $("#mensaje-DH").html("Rehash completado...");    
        }
        else{
            $("#contenido-DH").html("");
            $("#mensaje-DH").html("No es primo o no es una longitud valida...");
        }     
    });  
});