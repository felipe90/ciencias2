
//------------------listeners
$(function () {

  $("#floydbtn").on("click",function(){
    initMatrizFloyd ();
    ejecutarFloyd();
    $('#mynetworkbfs').html(dibujarTabla (matrizFloyd));
    $('#mynetworkbfs').append(resultadosFloyd(matrizFloyd));
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
    draw();
  });
 
});