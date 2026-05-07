import { I_vAspirante } from "../interfaces/I_vAspirante.js";
export default class Cl_vAspirante implements I_vAspirante {
    private vista;
    private inNombre;
    private inApellido;
    private inCedula;
    private inSexo;
    private inFechaNac;
    private inPuntoIndAcademico;
    private inPuntoPreparador;
    private inPuntoDiplomas;
    private inEstadoCivil;
    private btAceptar;
    private btCancelar;
    constructor();
    get nombre(): string;
    get apellido(): string;
    get cedula(): number;
    get sexo(): string;
    get fechaNac(): string;
    get puntoIndAcademico(): number;
    get puntoPreparador(): number;
    get puntoDiplomas(): number;
    get estadoCivil(): string;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
//# sourceMappingURL=Cl_vAspirante.d.ts.map