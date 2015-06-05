/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.util.StringTokenizer;
import java.util.Vector;

/**
 *
 * @author Daniel
 */
public class MiscUtil {
     public Vector obtenerVector(String palabras){
        Vector v = new  Vector();
        StringTokenizer st = new StringTokenizer(palabras,",");
        while(st.hasMoreElements()){
            v.add(st.nextToken());
        }
        return v;
    }
    public void printIntMatriz(int[][] matriz){
        System.out.println("entro");
        for(int i=0;i<matriz.length;i++){
            for(int j=0;j<matriz.length;j++){
                System.out.print(matriz[i][j]+" ");
            }
             System.out.print("\n");
        }
    }
    public void printStringMatriz(String[][] matriz){
        for(int i=0;i<matriz.length;i++){
            for(int j=0;j<matriz.length;j++){
                System.out.print(matriz[i][j]+" ");
            }
             System.out.print("\n");
        }
    }
    public void printArrayNode(Node[] n){
        for(int i=0;i<n.length;i++){
            System.out.print(i+1+": ");
            if(n[i]!=null){
                Node temp=n[i];
                while(temp!=null){
                    System.out.print((temp.valor)+" ");
                    temp=temp.sig;
                }
                System.out.println("");
            }                        
        }
    }
    public Object[][] stringToObject(String[][] matriz){
        Object[][] objeto = new Object[matriz.length][matriz.length];
        for(int i=0;i<matriz.length;i++){
            for(int j=0;j<matriz.length;j++){
                objeto[i][j]=matriz[i][j];
            }
        }
        return objeto;
    }
    public Object[][] intToObject(int[][] matriz){
        Object[][] objeto = new Object[matriz.length][matriz.length];
        for(int i=0;i<matriz.length;i++){
            for(int j=0;j<matriz.length;j++){
                objeto[i][j]=matriz[i][j];
            }
        }
        return objeto;
    }
    public Object[][] longToObject(long[][] matriz){
        Object[][] objeto = new Object[matriz.length][matriz.length];
        for(int i=0;i<matriz.length;i++){
            for(int j=0;j<matriz.length;j++){
                objeto[i][j]=matriz[i][j];
            }
        }
        return objeto;
    }
    public Object[] identificadoresColumnas(int tamano){
        Object[] idColumnas = new Object[tamano];
        for(int i=0;i<tamano;i++){
            idColumnas[i]=i+1;
        }
        return idColumnas;
    }
    public void printArrayInt(int[] arreglo){
        String c="Arreglo:\n";
        for(int i=0;i<arreglo.length;i++){
            c+=arreglo[i]+" ";
        }
        System.out.println(c);
    }
    
    
}
