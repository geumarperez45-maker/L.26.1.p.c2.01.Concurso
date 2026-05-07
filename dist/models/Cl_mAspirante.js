import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAspirante extends Cl_mPersona {
    _puntoIndAcademico = 0;
    _puntoPreparador = 0;
    _puntoDiplomas = 0;
    constructor({ nombre, apellido, cedula, sexo, fechaNac, puntoIndAcademico, puntoPreparador, puntoDiplomas }) {
        super({ nombre, apellido, cedula, sexo, fechaNac });
        this.puntoIndAcademico = puntoIndAcademico;
        this.puntoPreparador = puntoPreparador;
        this.puntoDiplomas = puntoDiplomas;
    }
    get puntoIndAcademico() {
        return this._puntoIndAcademico;
    }
    set puntoIndAcademico(value) {
        this._puntoIndAcademico = value > 25 ? 25 : value; // El máximo puntaje individual académico será de 25 puntos
    }
    get puntoPreparador() {
        return this._puntoPreparador;
    }
    set puntoPreparador(value) {
        this._puntoPreparador = value > 15 ? 15 : value; // El máximo puntaje por ser preparador será de 15 puntos
    }
    get puntoDiplomas() {
        return this._puntoDiplomas;
    }
    set puntoDiplomas(value) {
        this._puntoDiplomas = value > 10 ? 10 : value; // El máximo puntaje por diplomas será de 10 puntos
    }
    //Calcular puntos por edad
    calcularPuntosEdad() {
        const edad = this.calcularEdad();
        if (edad >= 10 && edad <= 30) {
            return 10;
        }
        else if (edad > 30 && edad <= 40) {
            return 5;
        }
        else {
            return 0;
        }
    }
    //Calcular puntaje total del aspirante
    calcularPuntajeTotal() {
        const puntajeTotal = this.puntoIndAcademico + this.puntoPreparador + this.puntoDiplomas + this.calcularPuntosEdad();
        return puntajeTotal > 30 ? 30 : puntajeTotal;
    }
}
//# sourceMappingURL=Cl_mAspirante.js.map