type Auto=[string,number];

const prius:Auto=["Toyota",2015]
const civic:Auto=["Honda",2016]

console.log("El Prius es marca:", prius[0]," y modelo ", prius[1])
console.log("El Civic es marca:", civic[0]," y modelo ", civic[1])

//DESTRUCTURACION DE TUPLA
const yaris:[string,number]=["Toyota",2015]

const [marca,modelo]=yaris;

console.log("La marca del yaris es:", marca)
console.log("El modelo del yaris es: ",modelo)

// TUPLA CON ELEMENTO REST
type StringNumberBooleans=[string,number,...boolean[]];
const a:StringNumberBooleans=["a",1,true,false,true];

//TUPLA SOLO LECTURA
type Auto2= readonly [string,number];
const tacoma:Auto=["Toyota",2014];

tacoma[0]="Honda"; //ESTO GENERARIA UN ERROR