// const usuario={
//     id:123,
//     admin:false,
//     volverseAdmin:function(){
//         this.admin=true;
//     },
// };
var _this = this;
// USANDO FUNCION TIPO FLECHA
var usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        _this.admin = true;
    }
};
console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);
