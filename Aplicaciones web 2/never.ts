function error(mensaje: string):never {
    throw new Error("mensaje");
    
}

function fallo():never {
    throw error("Reportar fallo");
    
    
}

function loopinfinito():never {
    while (true) {
        
    }
    
}
// error("hola");
// loopinfinito();
