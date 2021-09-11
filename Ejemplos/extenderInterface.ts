// EJEMPLO 1
// interface Direccion{
//     nombre:string;
//     calle:string;
//     numero: number;
//     ciudad:string;
//     pais:string;
//     codigoPostal:string;

// }

// interface DireccionApartamento extends Direccion{
//     unidad:string;
// }

// EJEMPLO 2
interface Computadora{
    memoria:string;
    procesador:string;
    hdd:string;
}

interface SistemaOperativo{
    so:string;
    version:string;
}

interface Portatil extends Computadora,SistemaOperativo{
    bateria:string;
    monitor:string;
    teclado:string;
    // procesador:string; //IGNORA EL ELEMENTO REPETIDO 
}

interface servidor extends Computadora,SistemaOperativo{
    conexion:string;
}

const mackbookPro:Portatil={
    memoria:"16G",
    procesador:"intel",
    hdd:"1TB",
    so:"osx",
    version:"catalina",
    bateria:"litio",
    monitor:"17 pulgadas",
    teclado:"español",


};

const ubuntuServer:servidor={
    memoria:"64GB",
    procesador:"intel",
    hdd:"4TB",
    so:"ubuntu",
    version:"trusty",
    conexion:"ethernet",
    


};

console.log(mackbookPro);