interface Computadora{
    os: "windows" | "linux" | "mac";
    monitor?: "crt" | "led"
    memoria: number;
    procesador:"intel"|"amd"
}

function imprimir(computador:Computadora) {
    console.log(`Sistema operativo: ${computador.os}`);
    console.log(`Memoria: ${computador.memoria}`);
    console.log(`Procesador: ${computador.procesador}`);
    
}
imprimir({
    os:"windows",
    memoria:8,
    procesador:"intel",
});
