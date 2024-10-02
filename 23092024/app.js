let frutas=["Banana","Manzana","Uva","Sandia","Kiwi","Durazno","Mango","Papaya","Melon","Arandano"];
console.log(frutas);
frutas.push("Manzana");
console.log(frutas);
frutas.unshift("Sandia");
console.log(frutas);

// Ejercicio de chill
/*function empujar(arreglo,elemento){
    let numElementos =  arreglo.lenght;
    arreglo[numElementos] = elemento;
}
empujar(frutas,"Uva");
console.log(frutas);*/


function dibujarV(num){
    let cadena="";
    for(let i = 0 ; i < num;i++){
        cadena = cadena + "X\n"; 
    }
    console.log(cadena);
}
function dibujarH(num){
    let cadena="";
    for(let i = 0 ; i < num;i++){
        cadena = cadena + "X "; 
    }
    console.log(cadena);
}

function cuadrado(num){
    let cadena="";
    for(let i = 0 ; i < num;i++){
        for(let j = 0; j < num; j++){
            if(j==num-1 || j==0 || i == 0 || i==num-1){
                cadena = cadena + "X ";
            }else{
                cadena = cadena + "  ";
            }
        }
        cadena = cadena + "\n";

    }
    console.log(cadena);
}

function tablas(num){
    
    for(let i = 0 ; i < num;i++){
        for(let j = 0; j < num; j++){
            console.log(i +" x "+ j + " = " + i*j);
        }
       

    }
}

function listarArreglo(arreglo){
    cont=0;
    frutas.forEach(fruta => {
        console.log(++cont + ", " + fruta);
    })
}

tamanho = prompt("Dame el tamaño de impresion: ");
dibujarH(tamanho);
dibujarV(tamanho);
cuadrado(tamanho);
tablas(tamanho);
listarArreglo(frutas);
