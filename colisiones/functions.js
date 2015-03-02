
//Objetos globales
var esObj;


function eSeparado(primo){
    this.m=primo;
    this.array=new Array();

}

eSeparado.prototype.initArray=function () {

    for (var i = 0; i < this.m; i++) {
        this.array[i]=new Array();
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < this.m; j++) {
            this.array[i][j]=0;        
        }  
    }

    for (var j = 0; j < this.m; j++) {
        this.array[0][j]=-1;          
    }
}

eSeparado.prototype.mostrarTabla=function() {
    var html="<table>";
    for (var i = 0; i < 2; i++) {
        html=html+"<tr>";
        for (var j = 0; j < this.m; j++) {
            html=html+"<td>"+this.array[i][j]+"</td>";            
        }
        html=html+"</tr>";   
    }
    html=html+"</table>"; 

    return html;
};


//funcion pricipal, se ejecuta luego de cargar la pagina
$(function () {
	//funciones respuesta ES
	$("#btonInitES").on("click",function(){
        esObj=new eSeparado(13);
        esObj.initArray();
        var html=esObj.mostrarTabla();
        $("#contenido-ES").html(html);
        $("#mensaje-ES").html("Inicializado...");
	});

    $("#btonListES").on("click",function(){

    });

    $("#btonInsertES").on("click",function(){
        var html=esObj.mostrarTabla();
        $("#contenido-ES").html(html);

    });

    $("#btonRehasES").on("click",function(){
        
    });

    //funciones respuesta EL
    $("#btonInitEL").on("click",function(){
        
    });

    $("#btonListEL").on("click",function(){
        
    });

    $("#btonInsertEL").on("click",function(){
        
    });

    $("#btonRehasEL").on("click",function(){
        
    });


    //funciones respuesta DH
    $("#btonInitDH").on("click",function(){
        
    });

    $("#btonListDH").on("click",function(){
        
    });

    $("#btonInsertDH").on("click",function(){
        
    });

    $("#btonRehasDH").on("click",function(){
        
    });

    //funciones respuesta PU
    $("#btonInitPU").on("click",function(){
        
    });

    $("#btonListPU").on("click",function(){
        
    });

    $("#btonInsertPU").on("click",function(){
        
    });

    $("#btonRehasPU").on("click",function(){
        
    });


    //funciones respuesta CU
    $("#btonInitCU").on("click",function(){
        
    });

    $("#btonListCU").on("click",function(){
        
    });

    $("#btonInsertCU").on("click",function(){
        
    });

    $("#btonRehasCU").on("click",function(){
        
    });    
});


