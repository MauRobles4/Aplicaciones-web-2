function error(mensaje) {
    throw new Error("mensaje");
}
function fallo() {
    throw error("Reportar fallo");
}
function loopinfinito() {
    while (true) {
    }
}
// error("hola");
loopinfinito();
