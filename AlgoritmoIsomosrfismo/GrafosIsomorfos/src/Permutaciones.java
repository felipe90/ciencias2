/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Dani
 */
public class Permutaciones {
    String cadena="";
    int cantidadPermutaciones;
    int[][] matrizPermutaciones;
    
    public void buscarPermutaciones(int longitudMatriz){
        setCadenaString(longitudMatriz);
        cantidadPermutaciones = getFactorial(cadena.length());
        String[] sPermutaciones = permutar(cadena, cantidadPermutaciones);
        stringArrayToMatrizArray(sPermutaciones);
        mostrarArrayString(sPermutaciones);
        mostrarMatrizPermutaciones();
    }
    
    public void setCadenaString(int c){
        cadena="";
        for(int i=97;i<97+c;i++){
            cadena+=(char)i;
        }
    }
    
    public void stringArrayToMatrizArray(String[] sPermutaciones){
        matrizPermutaciones= new int[cantidadPermutaciones][cadena.length()];
        for(int i=0;i<cantidadPermutaciones;i++){
            for(int j=0;j<cadena.length();j++){
                matrizPermutaciones[i][j]=sPermutaciones[i].codePointAt(j)-97;
            }
        }
    }
    public String[] permutar(String cadena, int p) {
        String[] per = new String[p];
        int l = cadena.length();
        String[] aux = permutacion(cadena);
        int pos = 0;

        if (p == 1 || l == 1) {//si el maximo de permutaciones es 1 o la longitud de la cadena es 1
            per[0] = cadena;
            return per;
        }

        for (int i = 0; i < aux.length; i++) {
            String[] auxiliar = permutar(aux[i].substring(1), getFactorial(l - 1));
            for (int j = 0; j < auxiliar.length; j++) {
                per[pos] = aux[i].charAt(0) + auxiliar[j];
                pos++;
            }
        }
        return per;

    }
    public String[] permutacion(String cadena) {
        int n = cadena.length();
        String temporal = "";
        String[] vector = new String[n];
        vector[0] = cadena;
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (j == n - 1) {
                    temporal = cadena.charAt(j) + temporal;
                } else {
                    temporal += cadena.charAt(j);
                }
            }
            cadena = temporal;
            vector[i] = temporal;
            temporal = "";
        }
        return vector;
    }

    public int getFactorial(int n) {
        int result;
        if (n == 1 || n == 0) {
            return 1;
        }

        result = getFactorial(n - 1) * n;
        return result;
    }
    public void mostrarArrayString(String[] vector) {
        for (int i = 0; i < vector.length; i++) {
            System.out.println(vector[i]);
        }
    }
    public void mostrarMatrizPermutaciones(){
        String c="";
         for(int i=0;i<cantidadPermutaciones;i++){
            for(int j=0;j<cadena.length();j++){
                c+=matrizPermutaciones[i][j];
            }
            c+="\n";
        }
        System.out.println("Permutaciones desde matriz de strings");
        System.out.println(c);
    }
}
