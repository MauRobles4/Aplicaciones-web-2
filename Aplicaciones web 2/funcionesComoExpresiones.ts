function saludar(fn:(a:string)=> void) {
    fn("Hola mundo")
    
}

function imprimirEnConsola(s:string) {
    console.log(s);
}

saludar(imprimirEnConsola);