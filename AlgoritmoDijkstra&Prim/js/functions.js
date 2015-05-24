
//------------------listeners
$(function () {


  $("#djbtn").on("click",function(){
    initDijkstra();
    dijkstra(0); //comienza desde 0
    drawDijkstra();
  });

   $("#primbtn").on("click",function(){
    initPrim();
    prim(); //comienza desde 0
    drawPrim();
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