import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAspirante extends Cl_mPersona {
    private _puntoIndAcademico: number = 0;
    private _puntoPreparador: number = 0;
    private _puntoDiplomas: number = 0;
    private estadoCivil: string = "";

    constructor({nombre, apellido, cedula, sexo, fechaNac, puntoIndAcademico, puntoPreparador, puntoDiplomas, estadoCivil}: {nombre: string, apellido: string, cedula: number, sexo: string, fechaNac: Date, puntoIndAcademico: number, puntoPreparador: number, puntoDiplomas: number, estadoCivil: string}) {
        super({nombre, apellido, cedula, sexo, fechaNac});
        this.puntoIndAcademico = puntoIndAcademico;
        this.puntoPreparador = puntoPreparador;
        this.puntoDiplomas = puntoDiplomas;
        this.estadoCivil = estadoCivil;

    }

    get puntoIndAcademico(): number {
        return this._puntoIndAcademico;
    }

    get _estadoCivil(): string{
        return this.estadoCivil;
    }

    set puntoIndAcademico(value: number) {
        this._puntoIndAcademico = value > 25 ? 25 : value; // El máximo puntaje individual académico será de 25 puntos
    }

    get puntoPreparador(): number {
        return this._puntoPreparador;
    }

    set puntoPreparador(value: number) {
        this._puntoPreparador = value > 15 ? 15 : value; // El máximo puntaje por ser preparador será de 15 puntos
    }

    get puntoDiplomas(): number {
        return this._puntoDiplomas;
    }

    set puntoDiplomas(value: number) {
        this._puntoDiplomas = value > 10 ? 10 : value; // El máximo puntaje por diplomas será de 10 puntos
    }

    //Calcular puntos por edad
    calcularPuntosEdad(): number {
        const edad = this.calcularEdad();
        if (edad >= 10 && edad <= 30) {
            return 10;
        } else if (edad > 30 && edad <= 40) {
            return 5;
        } else {
            return 0;
        }
    }

    //Calcular puntaje total del aspirante
    calcularPuntajeTotal(): number {
        const puntajeTotal = this.puntoIndAcademico + this.puntoPreparador + this.puntoDiplomas + this.calcularPuntosEdad();
        return puntajeTotal > 30 ? 30 : puntajeTotal;
    }
}