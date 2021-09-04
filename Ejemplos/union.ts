function imprimirId(id:number | string) {
    if (typeof id=== "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else{
        console.log(`El id es ${(id as number).toFixed()}`);
    }
    
    // console.log(`El id es ${id}`);
    
}

imprimirId(1234.234652);
imprimirId("No se");