/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author omar
 */
public class Dispersion {
    	int llave;
        	Dispersion (int llave) {
		this.llave = llave;
	}
	
	// Dispersion Division
	int division (int tamano) {
		return llave % tamano;
	}

	// Dispersion Midsquare
	int midsquare(int numeroBits) {
		llave = llave * llave;
		int cont = 0, i, r;
		int aux = llave;
		for (i = 1; i <= 32; i++) {
			if ((aux&1) == 1) {
				cont = i;
			}
			aux = aux >>1;
		}
		int temp = cont - numeroBits;
		temp = temp / 2;
		llave = llave >> temp;
		for (aux = 0, i = 0; i < numeroBits; i++) {
			r = llave &1;
			aux = aux + (int) (Math.pow(2, i) * r);
			llave = llave >> 1;
		}
		return aux;	
	}
	
	// Dispersion Plegamiento
	int plegamiento (int numeroBitsGrupo) {
		int grupo1, grupo2, grupo3, grupo4, grupo5;       
		int tamano = (int)Math.pow(2,numeroBitsGrupo)-1;
                // System.out.println(t);
                // Grupos de derecha a izquierda
		grupo1 = llave & tamano;
		llave = llave >> numeroBitsGrupo;
		grupo2 = llave & tamano;
		llave = llave >> numeroBitsGrupo;
		grupo3 = llave & tamano;
		llave = llave >> numeroBitsGrupo;
		grupo4 = llave & tamano;
		llave = llave >> numeroBitsGrupo;
		grupo5 = llave & 15;
		return grupo1 ^ grupo2 ^ grupo3 ^ grupo4 ^ grupo5;		
	}

	// Dispersion Transformacion Bases
	int transformacionLlaves (int base, int tamanoArreglo) {
		String r;
                r = null;
                String resul;
                resul = "";
                String s;
                s = "";
                int temp, i=0;
                while (llave != 0) {
                    temp = llave % base;
                    switch (temp) {
                        case 0:  r="0"; break;
                        case 1:  r="1"; break;
                        case 2:  r="10"; break;
                        case 3:  r="11"; break;
                        case 4:  r="100"; break;
                        case 5:  r="101"; break;
                        case 6:  r="110"; break;
                        case 7:  r="111"; break;
                        case 8:  r="1000"; break;
                        case 9:  r="1001"; break;
                        case 10:  r="1010"; break;
                        case 11:  r="1011"; break;
                        case 12:  r="1100"; break;
                        case 13:  r="1101"; break;
                        case 14:  r="1110"; break;
                        case 15:  r="1111"; break;
                    }
                    llave = llave / base;
                    s = r.concat (resul);
                    resul = s;
                } 

                int x = 0;
                int j;
                for (j = 0,  i = resul.length() - 1; i >= 0; i--, j++){
                    if (resul.charAt(i) == '1'){
                        x = x + (int)Math.pow(2.0, j);
                    }
                }  

                return x % tamanoArreglo;
	}
    
}
