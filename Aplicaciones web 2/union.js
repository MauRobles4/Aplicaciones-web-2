function imprimirId(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed());
    }
    // console.log(`El id es ${id}`);
}
imprimirId(1234.234652);
imprimirId("No se");
