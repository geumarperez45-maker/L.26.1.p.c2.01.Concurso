export default class Cl_mPersona {
    _nombre = "";
    _apellido = "";
    _cedula = 0;
    _sexo = "";
    _fechaNac = new Date();
    constructor({ nombre, apellido, cedula, sexo, fechaNac }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = new Date(fechaNac); //Recibe "aaaa-mm-dd"
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(value) {
        this._apellido = value;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(value) {
        this._cedula = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get fechaNac() {
        return this._fechaNac;
    }
    set fechaNac(value) {
        this._fechaNac = value;
    }
    // Método para calcular la edad de la persona
    calcularEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNac);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map