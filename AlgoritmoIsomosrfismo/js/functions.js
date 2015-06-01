
//------------------listeners
$(function () {



  $("#matrizbtn").on("click",function(){
    dibujarMatriz();
  });

  $("#mynetwork").on("click",function(){
    agregarNodo();
    draw();
    grafoCompleto=false;
  });

  $("#mynetwork2").on("click",function(){
    agregarNodo2();
    draw2();
    grafoCompleto2=false;
  });

  $("#adyacenciabtn").on("click",function(){
    asignarAdyacencia();
    asignarListaAdyacencia();
    grafoCompleto=true;   
    grafoCompleto2=true;

    draw();
    draw2();
  });
 
});