export default class Cl_mPersona {
    protected _nombre: string;
    protected _apellido: string;
    protected _cedula: number;
    protected _sexo: string;
    protected _fechaNac: Date;
    constructor({ nombre, apellido, cedula, sexo, fechaNac }: {
        nombre: string;
        apellido: string;
        cedula: number;
        sexo: string;
        fechaNac: Date;
    });
    get nombre(): string;
    set nombre(value: string);
    get apellido(): string;
    set apellido(value: string);
    get cedula(): number;
    set cedula(value: number);
    get sexo(): string;
    set sexo(value: string);
    get fechaNac(): Date;
    set fechaNac(value: Date);
    calcularEdad(): number;
}
//# sourceMappingURL=Cl_mPersona.d.ts.map