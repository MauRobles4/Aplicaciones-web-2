interface Cuadrado{
    color?:string; //? para indicar que es opcional
    ancho:number;
    
}

function crearCuadrado(cuadrado:Cuadrado):{area:number}{
    const area= cuadrado.ancho = cuadrado.ancho;
    return {area:area};
}

crearCuadrado({ancho:10});