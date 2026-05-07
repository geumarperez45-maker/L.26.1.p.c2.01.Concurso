"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const I_vAspirante_js_1 = require("../interfaces/I_vAspirante.js");
class Cl_vAspirante {
    vista;
    inNombre;
    inApellido;
    inCedula;
    inSexo;
    inFechaNac;
    inPuntoIndAcademico;
    inPuntoPreparador;
    inPuntoDiplomas;
    inEstadoCivil;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("aspirante");
        this.inNombre = document.getElementById("aspirante_inNombre");
        this.inApellido = document.getElementById("aspirante_inApellido");
        this.inCedula = document.getElementById("aspirante_inCedula");
        this.inSexo = document.getElementById("aspirante_inSexo");
        this.inFechaNac = document.getElementById("aspirante_inFechaNac");
        this.inPuntoIndAcademico = document.getElementById("aspirante_inPuntoIndAcademico");
        this.inPuntoPreparador = document.getElementById("aspirante_inPuntoPreparador");
        this.inPuntoDiplomas = document.getElementById("aspirante_inPuntoDiplomas");
        this.inEstadoCivil = document.getElementById("aspirante_inEstadoCivil");
        this.btAceptar = document.getElementById("aspirante_btAceptar");
        this.btCancelar = document.getElementById("aspirante_btCancelar");
    }
    // Getters para que el controlador lea los valores
    get nombre() { return this.inNombre.value; }
    get apellido() { return this.inApellido.value; }
    get cedula() { return +this.inCedula.value; }
    get sexo() { return this.inSexo.value; }
    get fechaNac() { return this.inFechaNac.value; }
    get puntoIndAcademico() { return +this.inPuntoIndAcademico.value; }
    get puntoPreparador() { return +this.inPuntoPreparador.value; }
    get puntoDiplomas() { return +this.inPuntoDiplomas.value; }
    get estadoCivil() { return this.inEstadoCivil.value; }
    mostrar() { this.vista.classList.remove("hidden"); this.vista.hidden = false; }
    ocultar() { this.vista.classList.add("hidden"); this.vista.hidden = true; }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
}
exports.default = Cl_vAspirante;
//# sourceMappingURL=Cl_vAspirante.js.map