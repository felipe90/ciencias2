/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.awt.Canvas;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.geom.AffineTransform;

/**
 *
 * @author Dani
 */
public class CanvasGrafo extends Canvas implements MouseListener{
    Graph graph;
    int count;
    Ventana objVentana;
    Adyacencia adyacencia;
    boolean mouseListener;
    
    
    boolean drawEdge;
    int ARR_SIZE = 6;
    public CanvasGrafo(Ventana objVentana,boolean mouseListener){
        setSize(300,300);
        addMouseListener(this);
        graph=new Graph();
        count=0;
        this.objVentana=objVentana;
        drawEdge=false;
        this.mouseListener=mouseListener;
    }
    
    public void paint(Graphics g){
        
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, getWidth(), getHeight());
        if(count!=0){
            drawVertex(g);
        }
        if(drawEdge){
            drawEdge(g, adyacencia.arregloAdyacenciaGrafo);
        }
            
    }
    public void drawVertex(Graphics g){
        
        Vertex v;
        for(int i=1;i<=count;i++){
                v=graph.getVertex(i);
                String temp=""+v.number;
                g.setColor(Color.BLACK);
                g.drawString(temp, v.x, v.y);
                g.setColor(Color.red);
                g.drawOval(v.x, v.y+10, 3, 3);
            }
    }
    public void drawEdge(Graphics g,Node[] array){
        Node temp;
        Vertex origen;
        Vertex destino; 
        g.setColor(Color.GREEN);
        for(int i=0;i<array.length;i++){
            if(array[i]!=null){
                temp=array[i];
                while(temp!=null){
                    origen=graph.getVertex(i+1);
                    destino=graph.getVertex(temp.valor);
                    int peso=adyacencia.matrizPonderacionGrafo[i][temp.valor-1];
                    //System.out.println("inicio: "+(i+1)+" fin: "+(temp.valor)+" Peso: "+peso);
                    g.setColor(Color.black);
                    g.drawString(peso+"",(origen.x+(destino.x-origen.x)/2), (origen.y+(destino.y-origen.y)/2));
                    
                    g.drawLine(origen.x, origen.y+10, destino.x, destino.y+10);
                    //drawArrow(g, origen.x, origen.y+10, destino.x, destino.y+10);
                    temp=temp.sig;
                }
            }
        }
    }
     void drawArrow(Graphics g1, int x1, int y1, int x2, int y2) {
                Graphics2D g = (Graphics2D) g1.create();
                
                double dx = x2 - x1, dy = y2 - y1;
                double angle = Math.atan2(dy, dx);
                int len = (int) Math.sqrt(dx*dx + dy*dy);
                AffineTransform at = AffineTransform.getTranslateInstance(x1, y1);
                at.concatenate(AffineTransform.getRotateInstance(angle));
                g.transform(at);

                // Draw horizontal arrow starting in (0, 0)
                g.drawLine(0, 0, len, 0);
                g.setColor(Color.BLACK);
                g.fillPolygon(new int[] {len, len-ARR_SIZE, len-ARR_SIZE, len},
                              new int[] {0, -ARR_SIZE, ARR_SIZE, 0}, 4);
            }
    @Override
    public void mouseClicked(MouseEvent e) {
        
            count++;
            drawEdge=false;
            graph.addVertex(count, e.getX(), e.getY());
            repaint();
        if(mouseListener){
            if(count>2){
                objVentana.addFileRowTable(count);
            }
        }
        
    }

    @Override
    public void mousePressed(MouseEvent e) {
    }

    @Override
    public void mouseReleased(MouseEvent e) {
    }

    @Override
    public void mouseEntered(MouseEvent e) {
    }

    @Override
    public void mouseExited(MouseEvent e) {
    }
     
    public void setAdyacencia(Adyacencia adyacencia){
        this.adyacencia=adyacencia;
    }
}
