export default class Cl_mPersona {
    protected _nombre: string = "";
    protected _apellido: string = "";
    protected _cedula: number = 0;
    protected _sexo: string = "";
    protected _fechaNac: Date = new Date();
    
    constructor({nombre, apellido, cedula, sexo, fechaNac}: {nombre: string, apellido: string, cedula: number, sexo: string, fechaNac: Date}) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNac = new Date(fechaNac); //Recibe "aaaa-mm-dd"
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(value: string) {
        this._apellido = value;
    }

    get cedula(): number {
        return this._cedula;
    }

    set cedula(value: number) {
        this._cedula = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get fechaNac(): Date {
        return this._fechaNac;
    }

    set fechaNac(value: Date) {
        this._fechaNac = value;
    }

    // Método para calcular la edad de la persona
    calcularEdad(): number {
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