/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.util.HashMap;

/**
 *
 * @author Daniel
 */
public class Graph {
    HashMap vertex;

    

    public Graph() {
        vertex=new HashMap();
    }
    
    public void addVertex(int number,int coordX,int coordY){
         Vertex v = new Vertex(number, coordX, coordY);
         vertex.put(number, v);
    }
    
    public Vertex getVertex(int number) {
        return (Vertex)vertex.get(number);
    }
    
    
}
