// CON interface
// interface Persona{
//     nombre:string;
//     edad:number;
// }
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: "Mauricio", edad: 22 }));
// interface Computadora{
//     os: "windows" | "linux" | "mac";
//     monitor?: "crt" | "led"
//     memoria: number;
//     procesador:"intel"|"amd"
// }
// function imprimir(computador:Computadora) {
//     console.log(`Sistema operativo: ${}`)
// }
// interface perro{
//     readonly raza:string;
// }
// const miCachorro: Perro 
