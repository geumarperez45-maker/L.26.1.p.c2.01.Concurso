"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const I_vAspirante_js_1 = require("../interfaces/I_vAspirante.js");
const Cl_mAspirante_js_1 = __importDefault(require("../models/Cl_mAspirante.js"));
class Cl_cAspirante {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // Se suscribe a los eventos de aceptar y cancelar de la vista
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método que llama el controlador del Concurso para abrir esta vista
    cargarAspirante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        // Se crea el modelo con los datos capturados en la vista
        // Nota: La fecha se envía como objeto Date
        this.callback(new Cl_mAspirante_js_1.default({
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNac: new Date(this.vista.fechaNac),
            puntoIndAcademico: this.vista.puntoIndAcademico,
            puntoPreparador: this.vista.puntoPreparador,
            puntoDiplomas: this.vista.puntoDiplomas,
            estadoCivil: this.vista.estadoCivil,
        }));
        this.vista.ocultar();
    }
}
exports.default = Cl_cAspirante;
//# sourceMappingURL=Cl_cAspirante.js.map