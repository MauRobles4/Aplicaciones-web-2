interface Computadora{
    memoria:string;
    procesador:string;
    hdd:string;
}

interface SistemaOperativo{
    so:string;
    version:string;
}

type Portatil2= Computadora & SistemaOperativo;

    


// interface Portatil extends Computadora,SistemaOperativo{
//     bateria:string;
//     monitor:string;
//     teclado:string;
// }

// interface servidor extends Computadora,SistemaOperativo{
//     conexion:string;
// }

const mackbookPro2:Portatil2={
    memoria:"16G",
    procesador:"intel",
    hdd:"1TB",
    so:"osx",
    version:"catalina",


};

const ubuntuServer2:servidor={
    memoria:"64GB",
    procesador:"intel",
    hdd:"4TB",
    so:"ubuntu",
    version:"trusty",
    conexion:"ethernet",
    


};