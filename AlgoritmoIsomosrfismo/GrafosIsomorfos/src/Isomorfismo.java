/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Dani
 */
public class Isomorfismo {

    Adyacencia adyacenciaGrafo1;
    Adyacencia adyacenciaGrafo2;
    Permutaciones p;
    int[][] matrizIntercalada;

    public Isomorfismo(Adyacencia a1, Adyacencia a2, Permutaciones p) {
        adyacenciaGrafo1 = a1;
        adyacenciaGrafo2 = a2;
        this.p = p;
    }

    public int calcularIsomorfismo() {
        int i = 0;//variable iteradora
        while (i < p.cantidadPermutaciones) {//p.cantidadPermutaciones
            int[] permutacionActual = p.matrizPermutaciones[i];
            matrizIntercalada = filasPorFilas(adyacenciaGrafo1.matrizAdyacencia, permutacionActual);
            matrizIntercalada = ColumnasorColumnas(matrizIntercalada, permutacionActual);
            if(compararMatricies(matrizIntercalada)){//si concuerdan la matriz de adyacencia1 con la intercalada...
                break;//salga del loop
            }
            i++;
        }
        return i;//si es mayor a la cantidad de permutaciones no encontrò solucion
        //si es mejor a la cantidad de permutaciones, la solucion esta en la posiciòn de permutaciòn i
    }

    public boolean compararMatricies(int[][] matrizPrueba) {
        for (int i = 0; i < adyacenciaGrafo2.tamano; i++) {
            for (int j = 0; j < adyacenciaGrafo2.tamano; j++) {
                if (adyacenciaGrafo2.matrizAdyacencia[i][j] != matrizPrueba[i][j]) {
                    return false;
                }
            }
        }
        System.out.println("es igual");
        return true;
    }

    public int[][] filasPorFilas(int[][] matrizAIntercalar, int[] permutacion) {
        int[][] matrizResultado = new int[matrizAIntercalar.length][matrizAIntercalar.length];
        for (int i = 0; i < matrizResultado.length; i++) {
            for (int j = 0; j < matrizResultado.length; j++) {
                matrizResultado[i][j] = matrizAIntercalar[permutacion[i]][j];
            }
        }
        return matrizResultado;
    }

    public int[][] ColumnasorColumnas(int[][] matrizAIntercalar, int[] permutacion) {
        int[][] matrizResultado = new int[matrizAIntercalar.length][matrizAIntercalar.length];
        for (int i = 0; i < matrizResultado.length; i++) {
            for (int j = 0; j < matrizResultado.length; j++) {
                matrizResultado[i][j] = matrizAIntercalar[i][permutacion[j]];
            }
        }
        return matrizResultado;
    }
    public void printMatrizIntercalada(){
        String c="";
        for (int i = 0; i < matrizIntercalada.length; i++) {
            for (int j = 0; j < matrizIntercalada.length; j++) {
               c+=matrizIntercalada[i][j]+" "; 
            }
            c+="\n";
        }
        System.out.println("Matriz Intercalada:\n"+c);
    }
    

}
