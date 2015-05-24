
//------------------listeners
$(function () {

  $("#dfsbtn").on("click",function(){
    var nodotxt=$("#inputdfs").val();
    DFS(nodotxt);
    drawResult('mynetworkdfs');
  });

  $("#bfsbtn").on("click",function(){
    var nodotxt=$("#inputbfs").val();
    BFS(nodotxt);
    drawResult('mynetworkbfs');
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
    initNodosRecorrido();    
    draw();
  });
 
});