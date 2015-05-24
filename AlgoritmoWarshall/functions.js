
//------------------listeners
$(function () {

  $("#warshallbtn").on("click",function(){
    initMatrizWarshall ();
    ejecutarWarshall();
    $('#mynetworkdfs').html(dibujarTabla (matrizRecorridos));
    $('#mynetworkdfs').append("<p>Matriz Transitoria</p>");
    $('#mynetworkdfs').append(dibujarTabla (matrizWarshall));
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