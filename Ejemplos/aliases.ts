type punto={
    x:number;
    y:number;
}

function imprimirCoordenadas(punto:punto) {
    console.log(`La coordenada x es= ${punto.x}`);
    console.log(`La coordenada y es= ${punto.y}`);
    
}
imprimirCoordenadas({x:4,y:16});