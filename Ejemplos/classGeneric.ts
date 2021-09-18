class Caja<T>{
    contenido:T;

    constructor(value:T){
        this.contenido=value;
        console.log(this.contenido);
    }
}

type Juguete={
    nombre:string;

};

const misJuguetes:Juguete[]=[];
misJuguetes.push({nombre:"Pelota"});
misJuguetes.push({nombre:"Consola"});

const miCajaDeJuguetes:Caja<Juguete[]>=new Caja(misJuguetes);

type Maquillaje={
    nombre:string;
}

const miMaquillaje: Maquillaje[]=[];
miMaquillaje.push({nombre:"Sombras"});
miMaquillaje.push({nombre:"Labial"});

const miCajaDeMaquillaje:Caja<Maquillaje[]>=new Caja(miMaquillaje);

