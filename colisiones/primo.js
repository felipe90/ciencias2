function primo (n) {
    
    //para efectos del programa 
    //no aceptar un 1 o 2 aunque sean primos

    if(n==1 || n==2){
        return false;
    }

    var aux=0;
    for (var i = 2; i < n; i++) {
        aux=n%i;
    }

    if(aux==0){
        return false;
    }

    return true;
}