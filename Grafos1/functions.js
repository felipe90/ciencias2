
//------------------listeners
$(function () {

  $("#recorridosbtn").on("click",function(){
    var nodotxt=$("#inputrecorrido").val();

    DFS(nodotxt);

    BFS(nodotxt);
    
    drawResultBFS('mynetworkbfs');
    drawResultDFS('mynetworkdfs');
    
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
    initNodosDFS();
    initNodosBFS();
    draw();
  });
 
});