/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author Daniel
 */
public class Vertex {
    int number;
    int x;
    int y;
    Vertex sig;
    Vertex(int number,int coordX,int coordY){
        this.number=number;
        x=coordX;
        y=coordY;
        sig=null;
    }
}
