"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cl_mAspirante_js_1 = __importDefault(require("./Cl_mAspirante.js"));
class Cl_mConcurso {
    mejorPuntaje = 0;
    nombreGanador = "";
    edadGanador = 0;
    puntosEdadGanador = 0;
    procesarAspirante(aspirante) {
        const puntajeTotal = aspirante.calcularPuntajeTotal();
        if (puntajeTotal > this.mejorPuntaje) {
            this.mejorPuntaje = puntajeTotal;
            this.nombreGanador = `${aspirante.nombre} ${aspirante.apellido}`;
            this.edadGanador = aspirante.calcularEdad();
            this.puntosEdadGanador = aspirante.calcularPuntosEdad();
        }
    }
    // Reportar resultados del concurso
    obtenerGanador() {
        return this.nombreGanador;
    }
    obtenerMejorPuntaje() {
        return this.mejorPuntaje;
    }
    obtenerEdadGanador() {
        return this.edadGanador;
    }
    obtenerPuntosEdadGanador() {
        return this.puntosEdadGanador;
    }
}
exports.default = Cl_mConcurso;
//# sourceMappingURL=Cl_mConcurso.js.map