import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAspirante extends Cl_mPersona {
    private _puntoIndAcademico;
    private _puntoPreparador;
    private _puntoDiplomas;
    private estadoCivil;
    constructor({ nombre, apellido, cedula, sexo, fechaNac, puntoIndAcademico, puntoPreparador, puntoDiplomas, estadoCivil }: {
        nombre: string;
        apellido: string;
        cedula: number;
        sexo: string;
        fechaNac: Date;
        puntoIndAcademico: number;
        puntoPreparador: number;
        puntoDiplomas: number;
        estadoCivil: string;
    });
    get puntoIndAcademico(): number;
    get _estadoCivil(): string;
    set puntoIndAcademico(value: number);
    get puntoPreparador(): number;
    set puntoPreparador(value: number);
    get puntoDiplomas(): number;
    set puntoDiplomas(value: number);
    calcularPuntosEdad(): number;
    calcularPuntajeTotal(): number;
}
//# sourceMappingURL=Cl_mAspirante.d.ts.map