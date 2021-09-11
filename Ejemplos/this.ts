// const usuario={
//     id:123,
//     admin:false,
//     volverseAdmin:function(){
//         this.admin=true;
//     },
// };

// USANDO FUNCION TIPO FLECHA
const usuario2={
    id:123,
    admin:false,
    volverseAdmin:() => {
        this.admin=true;
    },
};

console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);