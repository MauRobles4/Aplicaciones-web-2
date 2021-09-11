const imprimirTarea=(v:Array<string>)=>{
    v.forEach((v)=>{
        console.log(v);
    });
};

const misTareas:string[]=[
    "levantarse",
    "lavarse las manos",
    "sacar al perro",
];

imprimirTarea(misTareas);

//READONLY
const miLista: ReadonlyArray<string>=["a","b","c"];

// miLista.push("d");

// const miLista2: new ReadonlyArray("a","b","c");


const miLista3: ReadonlyArray<string>=["a","b","c"];