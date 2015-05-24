
//------------------listeners
$(function () {


  $("#floydbtn").on("click",function(){
    kruskal();
    
    drawArbol();
    drawQueue();
    $('#mynetworkArbol').append("<p>Peso minimo:"+total+"</p>");
   
  });

  $("#matrizbtn").on("click",function(){
    dibujarMatriz();
  });

  $("#mynetwork").on("click",function(){
    agregarNodo();
    draw();
    grafoCompleto=false;
  });

  $("#adyacenciabtn").on("click",function(){
    asignarAdyacencia();
    asignarListaAdyacencia();
    grafoCompleto=true;   
    draw();
  });
 
});