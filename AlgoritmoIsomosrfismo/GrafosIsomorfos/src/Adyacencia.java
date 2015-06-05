/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.util.HashMap;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author Dani
 */
public class Adyacencia {
   
    int tamano;
    
    //Para mostrar gráficamente
    Node[] arregloAdyacenciaGrafo;
    int[][] matrizAdyacenciaGrafo;
    int[][] matrizPonderacionGrafo;
    //para utilizarlo en el algorítmo
    Node[] arregloAdyacencia;
    int[][] matrizAdyacencia;
    int[][] matrizPonderacion;
    
    public void inicializarValoresGrafo(DefaultTableModel dtm) {
        tamano=dtm.getColumnCount();
        setMatrizAdyacenciaGrafo(dtm);
        setMatrizPonderacionGrafo(dtm);
        setArregloAdyacenciaGrafo();
        completarMatrices();
        setArregloAdyacencia();
    }

    public void setMatrizAdyacenciaGrafo(DefaultTableModel dtm) {
        matrizAdyacenciaGrafo = new int[dtm.getRowCount()][dtm.getRowCount()];
        matrizAdyacencia = new int[dtm.getRowCount()][dtm.getRowCount()];
        for (int i = 0; i < dtm.getRowCount(); i++) {
            for (int j = 0; j < dtm.getRowCount(); j++) {
                String s = dtm.getValueAt(i, j).toString();
                if (s.equals("0") || s.equals("x")) {
                    matrizAdyacenciaGrafo[i][j] = 0;
                } else {
                    matrizAdyacenciaGrafo[i][j] = 1;
                }
            }
        }
    }
    public void setMatrizPonderacionGrafo(DefaultTableModel dtm) {
        matrizPonderacionGrafo = new int[dtm.getRowCount()][dtm.getRowCount()];
        matrizPonderacion = new int[dtm.getRowCount()][dtm.getRowCount()];
        for (int i = 0; i < dtm.getRowCount(); i++) {
            for (int j = 0; j < dtm.getRowCount(); j++) {
                String s = dtm.getValueAt(i, j).toString();
                if (s.equals("0") || s.equals("x")) {
                    matrizPonderacionGrafo[i][j] = 0;
                } else {
                    matrizPonderacionGrafo[i][j] = Integer.parseInt(s);
                }
            }
        }
    }
    public void setArregloAdyacenciaGrafo() {
        arregloAdyacenciaGrafo = new Node[matrizAdyacenciaGrafo.length];
        for (int i = 0; i < matrizAdyacenciaGrafo.length; i++) {
            for (int j = 0; j < matrizAdyacenciaGrafo.length; j++) {
                if (matrizAdyacenciaGrafo[i][j] == 1) {
                    if (arregloAdyacenciaGrafo[i] == null) {
                        arregloAdyacenciaGrafo[i] = new Node(j + 1);
                    } else {
                        Node temp = arregloAdyacenciaGrafo[i];
                        while (temp.sig != null) {
                            temp = temp.sig;
                        }
                        temp.sig = new Node(j + 1);
                    }
                }
            }
        }
    }
    public void completarMatrices(){
        for(int i=0;i<tamano;i++){
            for(int j=0;j<tamano;j++){
                matrizAdyacencia[i][j]=0;
                matrizPonderacion[i][j]=0;   
            }
        }
        for(int i=0;i<tamano;i++){
            for(int j=0;j<tamano;j++){
                if(matrizAdyacenciaGrafo[i][j]==1){
                    matrizAdyacencia[i][j]=1;
                    matrizAdyacencia[j][i]=1;
                    matrizPonderacion[i][j]=matrizPonderacionGrafo[i][j];
                    matrizPonderacion[j][i]=matrizPonderacionGrafo[i][j];
                }                   
            }
        }
    }
    public void setArregloAdyacencia(){
        arregloAdyacencia = new Node[matrizAdyacencia.length];
        for (int i = 0; i < matrizAdyacencia.length; i++) {
            for (int j = 0; j < matrizAdyacencia.length; j++) {
                if (matrizAdyacencia[i][j] == 1) {
                    if (arregloAdyacencia[i] == null) {
                        arregloAdyacencia[i] = new Node(j + 1);
                    } else {
                        Node temp = arregloAdyacencia[i];
                        while (temp.sig != null) {
                            temp = temp.sig;
                        }
                        temp.sig = new Node(j + 1);
                    }
                }
            }
        }
    }
    
    
    
}
