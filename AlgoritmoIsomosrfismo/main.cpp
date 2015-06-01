#include <iostream>
using namespace std;
#define FILAS 5
#define COLUMNAS 5
int numperm;


int factorial(int n) { 
	int i=0,fact=1; 

	if(n<=1) { 
		return(1); 
	} 

	else { 
		for(i=1;i<=n;i++) { 
			fact=fact*i; 
		} 
		return(fact); 
	} 
}

void intercambiar (int *p1, int *p2){
	int aux;
	aux = *p1;
	*p1 = *p2;
	*p2 = aux;
}

void permutar (int vector[], int m, int n){
	int i, k;
	if (m > 1)
		for (i = 1; i <= m; i++) {
			intercambiar (&vector[i], &vector[m]);
			permutar (vector, m-1, n);
			intercambiar (&vector[i], &vector[m]);
		}
	else {
			cout << "\n\n";
			for (k=1; k<n; k++){
				cout << vector[k] << "\t";
				if(k==(n-1)){
					cout << "PERMUTACION " << numperm;
					numperm++;
				}			
			}
	}
}


bool comparamatriz(int **&matriz1, int **&matriz2, int tam) {
		bool comprobacion=true;
		for (int i=0; i<tam; i++) {
				for(int j=0;j<tam; j++)
					if(matriz1[i][j]!=matriz2[i][j]) comprobacion=false;
		}
		return comprobacion;			
	}








int main(int argc, char** argv) {
	
	int i, j, numpermutaciones;
	i=0;
	
	
	// Capturar Grafos
	int grafo1 [FILAS][COLUMNAS] = {
	0, 0, 1, 1, 0,
	0, 0, 1, 0, 0,
	1, 1, 0, 0, 1,
	1, 0, 0, 0, 0,
	0, 0, 1, 0, 0
	};

	int grafo2 [FILAS][COLUMNAS] = {
	0, 1, 0, 0, 0,
	1, 0, 1, 1, 0,
	0, 1, 0, 0, 0,
	0, 1, 0, 0, 1,
	0, 0, 0, 1, 0
	};

	int numelementosarreglo;
//	cout << "\nNumero de elementos del arreglo para generar matriz de permutaciones: ";
//	cin >> numelementosarreglo;
	numelementosarreglo = 5;

	// El tamaño del arreglo sera el numero de elementos + 1 porque en la primera posicion debe ir un 0 que no se tomara
	int tamanioarreglo = numelementosarreglo+1;
	
	int arreglo[tamanioarreglo];

	// Crea el arreglo	
	for(i=0;i<=numelementosarreglo; i++){
		arreglo[i] = i;
	}
	
	// Calcula el numero de permutaciones esperada
	numpermutaciones = factorial(numelementosarreglo);
	cout << "SE ESPERAN " << numpermutaciones << " PERMUTACIONES\n";
	
	// Declara la matriz de permutaciones 
	int matrizpermutaciones[numpermutaciones][numelementosarreglo];
	
	// Genera la matriz de permutaciones
	permutar(arreglo, numelementosarreglo, tamanioarreglo);



	// Selecciona una permutacion y aplica el algoritmo
	int permutacion [5] = {4,1,2,5,3};

	int grafointercambiofilas [FILAS][COLUMNAS];
	
	int grafointercambiocolumnas [FILAS][COLUMNAS];
	
	// IMPRIME ARREGLO DE PERMUTACION	
	cout << "\nAPLICAREMOS LA PERMUTACION: ";
	for (i=0; i<numelementosarreglo; i++){
		cout << permutacion[i];
	}
	
	// IMPRIME GRAFO 1
	cout << "\nGRAFO 1\n";
	for (i=0; i<numelementosarreglo; i++){
		for (j=0; j<numelementosarreglo; j++){
			cout << grafo1[i][j] << "\t";			
		}
		cout << "\n\n";
	}

	// GENERA GRAFO CON FILAS INTERCAMBIADAS
	for (i=0; i<numelementosarreglo; i++){
		for(j=0; j<numelementosarreglo; j++){
			grafointercambiofilas [permutacion[i]-1][j] = grafo1[i][j];
		}
	}

	// IMPRIME GRAFO CON FILAS INTERCAMBIADAS	
	cout << "\nGRAFO FILAS INTERCAMBIADAS\n";
	for (i=0; i<numelementosarreglo; i++){
		for (j=0; j<numelementosarreglo; j++){
			cout << grafointercambiofilas[i][j] << "\t";			
		}
		cout << "\n\n";
	}
	

	// GENERA GRAFO CON COLUMNAS INTERCAMBIADAS
	for (i=0; i<numelementosarreglo; i++){
		for(j=0; j<numelementosarreglo; j++){
			grafointercambiocolumnas [i][permutacion[j]-1] = grafointercambiofilas[i][j];
		}
	}

	// IMPRIME GRAFO CON COLUMNAS INTERCAMBIADAS	
	cout << "\nGRAFO COLUMNAS INTERCAMBIADAS\n";
	for (i=0; i<numelementosarreglo; i++){
		for (j=0; j<numelementosarreglo; j++){
			cout << grafointercambiocolumnas[i][j] << "\t";			
		}
		cout << "\n\n";
	}

	// IMPRIME GRAFO 2	
	cout << "\nGRAFO 2\n";
	for (i=0; i<numelementosarreglo; i++){
		for (j=0; j<numelementosarreglo; j++){
			cout << grafo2[i][j] << "\t";			
		}
		cout << "\n\n";
	}


	// COMPARAMOS EL GRAFO CON COLUMNAS INTERCAMBIADAS CON GRAFO 2
	bool comprobacion=true;
	for (int i=0; i<numelementosarreglo; i++) {
		for(int j=0;j<numelementosarreglo; j++)
			if(grafointercambiocolumnas[i][j]!=grafo2[i][j]) comprobacion=false;
	}
	if(comprobacion==true) cout << "\nES ISOMORFA\n";
	else cout << "\nNO ES ISOMORFA\n";

}
