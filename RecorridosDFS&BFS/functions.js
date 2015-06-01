
//------------------listeners
$(function () {

  $("#recorridosbtn").on("click",function(){
    var nodotxt=$("#inputrecorrido").val();
    temp=parseInt(nodotxt);


    DFS(temp);
    BFS(temp);

    drawResultDFS();
    drawResultBFS();
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