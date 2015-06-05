/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.JFrame;
import javax.swing.JTextField;

/**
 *
 * @author Dani
 */
class ButtonHandler implements ActionListener{
    Ventana objVentana;
    CanvasGrafo objGrafo1;
    CanvasGrafo objGrafo2;
    Adyacencia adyacencia1;
    Adyacencia adyacencia2;
    MiscUtil mu;
    Isomorfismo iso;
    Permutaciones permutaciones;
    @Override
    public void actionPerformed(ActionEvent e) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        if(e.getActionCommand().equals("Dibujar Grafo 1")){            
            //completeMatriz();
            //codigoQuemado3();
            
            adyacencia1.inicializarValoresGrafo(objVentana.dtmTablaMatrizAdyacencia1);
            mu.printArrayNode(adyacencia1.arregloAdyacencia);
            objGrafo1.setAdyacencia(adyacencia1);
            objGrafo1.drawEdge=true;
            objGrafo1.repaint();
        }
        if(e.getActionCommand().equals("Dibujar Grafo 2")){
            adyacencia2.inicializarValoresGrafo(objVentana.dtmTablaMatrizAdyacencia2);
            mu.printArrayNode(adyacencia2.arregloAdyacencia);
            objGrafo2.setAdyacencia(adyacencia2);
            objGrafo2.drawEdge=true;
            objGrafo2.repaint();
        }
        if(e.getActionCommand().equals("Calcular Isomorfismo")){
            permutaciones.buscarPermutaciones(objVentana.dtmTablaMatrizAdyacencia1.getColumnCount());
            int permutacion=iso.calcularIsomorfismo();
            String cadena="";
            if(permutacion>=permutaciones.cantidadPermutaciones){                
                //System.out.println("no son isomorficas");
                cadena+="No son isomórficas, se realizaron "+permutacion+" permutaciones";
            }else{
                /*se realizan las operaciones sobre el grafo 1 para con la permutacion
                adecuada llevarlo a ser como el grafo 2
                */
                cadena+="Se encontró un isomorfismo para una permutación: ";
                int[] temp = permutaciones.matrizPermutaciones[permutacion];
                for(int i=0;i<temp.length;i++){
                    cadena+=(temp[i]+1)+" ";
                }   
                cadena+="\n";
                for(int i=0;i<temp.length;i++){
                    cadena+="En el segundo grafo, reemplace el vertice "+(i+1) +" por "+(temp[i]+1)+"\n";
                } 
                cadena+="la idea es a partir del segundo grafo, se pueda pintar"
                        + " el primer grafo así: \n \n Tomando una matriz auxiliar"
                        + "en 0, ejecute lo siguiente\n";
                for(int i=0;i<temp.length;i++){
                    cadena+="La fila "+(i+1) +", copiela en la fila "+(temp[i]+1)+"\n";
                } 
                cadena+="\nCon el grafo donde están las filas intercambiadas, tomando"
                        + " una matriz \nauxiliar en 0, ejecute lo siguiente:\n";
                for(int i=0;i<temp.length;i++){
                    cadena+="la columna "+(i+1) +", copiela la columna "+(temp[i]+1)+"\n";
                } 
                cadena+="El primer grafo debe ser igual a la martiz auxiliar.";
                
                iso.printMatrizIntercalada();
                System.out.println("Posicion permutacion: "+(permutacion));
                mu.printArrayInt(permutaciones.matrizPermutaciones[permutacion]);
            }
            objVentana.jtaResultado.setText(cadena);
            
        }
        
    }
    public void completeMatriz(){
        for (int i = 0; i < objVentana.dtmTablaMatrizAdyacencia1.getRowCount(); i++) {
                for (int j = 0; j < objVentana.dtmTablaMatrizAdyacencia1.getRowCount(); j++) {
                    String s=objVentana.dtmTablaMatrizAdyacencia1.getValueAt(i, j).toString();
                        objVentana.dtmTablaMatrizAdyacencia1.setValueAt(s, j, i);
                }
            }
    }
    public ButtonHandler(){
    
    }
    public ButtonHandler(Ventana objVentana,CanvasGrafo objDibujo1,CanvasGrafo objDibujo2){
        this.objVentana=objVentana;
        this.objGrafo1=objDibujo1;
        this.objGrafo2=objDibujo2;
        mu = new MiscUtil();
        adyacencia1=new Adyacencia();
        adyacencia2=new Adyacencia();
        permutaciones= new Permutaciones();
        iso = new Isomorfismo(adyacencia1, adyacencia2,permutaciones);
        
    }
    public void codigoQuemado(){//2 QUE APARECE EN DIJKSTRA
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 0, 1);
        objVentana.tablaMatrizAdyacencia1.setValueAt(7, 0, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 0, 9);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 1, 2);
        objVentana.tablaMatrizAdyacencia1.setValueAt(2, 1, 4);
        objVentana.tablaMatrizAdyacencia1.setValueAt(2, 2, 3);
        objVentana.tablaMatrizAdyacencia1.setValueAt(5, 2, 8);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 3, 4);
        objVentana.tablaMatrizAdyacencia1.setValueAt(7, 3, 5);
        objVentana.tablaMatrizAdyacencia1.setValueAt(6, 4, 9);
        objVentana.tablaMatrizAdyacencia1.setValueAt(1, 5, 6);
        objVentana.tablaMatrizAdyacencia1.setValueAt(8, 5, 9);
        objVentana.tablaMatrizAdyacencia1.setValueAt(2, 6, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(6, 6, 8);
    }
    public void codigoQuemado2(){//1  que aparece en DIJKSTR
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 0, 1);
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 0, 5);
        objVentana.tablaMatrizAdyacencia1.setValueAt(2, 0, 6);
        objVentana.tablaMatrizAdyacencia1.setValueAt(1, 1, 2);
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 1, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(5, 2, 3);
        objVentana.tablaMatrizAdyacencia1.setValueAt(1, 2, 5);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 3, 4);
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 3, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(7, 4, 5);
        objVentana.tablaMatrizAdyacencia1.setValueAt(5, 4, 6);
        objVentana.tablaMatrizAdyacencia1.setValueAt(6, 7, 6);
    
    }
    public void codigoQuemado3(){//10 nodos rombo
        objVentana.tablaMatrizAdyacencia1.setValueAt(5, 0, 1);
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 0, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 1, 2);
        objVentana.tablaMatrizAdyacencia1.setValueAt(5, 1, 3);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 1, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(1, 1, 8);
        objVentana.tablaMatrizAdyacencia1.setValueAt(3, 2, 3);
        objVentana.tablaMatrizAdyacencia1.setValueAt(5, 3, 4);
        objVentana.tablaMatrizAdyacencia1.setValueAt(6, 3, 5);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 3, 8);
        objVentana.tablaMatrizAdyacencia1.setValueAt(4, 4, 5);
        objVentana.tablaMatrizAdyacencia1.setValueAt(2, 5, 6);
        objVentana.tablaMatrizAdyacencia1.setValueAt(1, 5, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(1, 6, 7);
        objVentana.tablaMatrizAdyacencia1.setValueAt(2, 7, 8);
        
    
    }

}