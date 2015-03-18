var elObj;

//encadenamiento lineal
function lineal(llave,sig){
    this.llave=llave;
    this.sig=sig;
}

function dispLineal(m){
    this.array=new Array();
    this.proxima=m-1;
    this.m=m;
}

dispLineal.prototype.initArray=function () {

    for (var i = 0; i < this.m; i++) {
        this.array[i]=new lineal(0,-1); 
    }    

    console.log(this.array);
}

dispLineal.prototype.pruebaLineal=function (llave) {
    var h=llave % this.m;

    if (this.array[h].llave==0) {
        this.array[h].llave=llave;
        this.array[h].sig=-1;
        return 1;
    } //insercion exitosa sin colision

    while(this.array[h].llave!=llave && this.array[h].sig!=-1){
        h=this.array[h].sig;
    }

    if (this.array[h].llave==llave) {
        return 0;
    }//la llave ya existe

    while(this.array[this.proxima].llave!=0 && this.proxima>0){
        this.proxima=this.proxima-1
    }

    if (this.array[this.proxima].llave!=0) {
        return -1
    }//tabla llena debe hacer rehash

    console.log("colsion");
    this.array[this.proxima].llave=llave;
    this.array[this.proxima].sig=1;
    this.array[h].sig=this.proxima;
    return 1;
    //insercion exitosa con resolucion de colision
}

dispLineal.prototype.getArray=function() {
    return this.array;
}

dispLineal.prototype.rehash=function(array) {

   for (var i = 0; i < array.length; i++) {
       this.pruebaLineal(array[i].llave);
       console.log("aaaa");
   }
}

dispLineal.prototype.mostrarTabla=function() {

    var html="<table>";
    html=html+"<tr>";
    for (var i = 0; i < this.m; i++) {
        html=html+"<td>"+this.array[i].sig+"</td>";        
    }
    html=html+"</tr>";

    html=html+"<tr>";
    for (var i = 0; i < this.m; i++) {
        html=html+"<td>"+this.array[i].llave+"</td>";        
    }
    html=html+"</tr>";

    html=html+"</table>"; 

    return html;
};

dispLineal.prototype.listar=function () {
    var html="";
    for (var i = 0; i < this.m; i++) {
        html+="<p>("+i+") Llave: "+this.array[i].llave;
        if(this.array[i].sig!=-1){
            html+=" => "+this.array[i].sig;
        }
        html+="</p>";
    }   
    return html;  
}


$(function () {
    //funciones respuesta EL
    $("#btonInitEL").on("click",function(){

        m=window.prompt("Inserte el numero maximo de llaves","");
        
        if(primo(m)){
            elObj=new dispLineal(m);
            elObj.initArray();
            var html=elObj.mostrarTabla();
            $("#contenido-EL").html(html);
            $("#mensaje-EL").html("Inicializado...");    
        }
        else{
            $("#contenido-EL").html("");
            $("#mensaje-EL").html("No es primo o no es una longitud valida...");
        }
              
    });

    $("#btonListEL").on("click",function(){
         var html=elObj.mostrarTabla();
         html+=elObj.listar();

         $("#contenido-EL").html(html); 
    });

    $("#btonInsertEL").on("click",function(){
        var key=$("#textEL").val();
        if(key!=""){
            var res=elObj.pruebaLineal(key);
            var html=elObj.mostrarTabla();
            $("#contenido-EL").html(html);
            if(res==-1){
                $("#mensaje-EL").html("Tabla llena, debe hacer re-hash..."); 
            }else if (res==0){
                $("#mensaje-EL").html("Llave ya existe...");
            }else if (res==1) {
                $("#mensaje-EL").html("Llave insertada con exito..."); 
            }
        }
        else{
            $("#mensaje-EL").html("Valor de llave invalido...");     
        }
    });

    $("#btonRehasEL").on("click",function(){
        var reElObj;
        m=window.prompt("Inserte el nuevo numero maximo de llaves","");
        
        if(primo(m)){
            reElObj=new dispLineal(m);
            reElObj.initArray();
            reElObj.rehash(elObj.getArray());
            elObj=reElObj; //reemplazar por el auxiliar
            var html=elObj.mostrarTabla();
            $("#contenido-EL").html(html);
            $("#mensaje-EL").html("Rehash completado...");    
        }
        else{
            $("#contenido-EL").html("");
            $("#mensaje-EL").html("No es primo o no es una longitud valida...");
        }
    });
});