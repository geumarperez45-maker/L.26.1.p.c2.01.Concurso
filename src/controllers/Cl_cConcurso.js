"use strict";
/** - Se tiene la clase base Persona, con los siguientes datos:
   -> Nombre
   -> Apellido
   -> Cédula
   -> Sexo (M-F)
   -> Fecha de nacimiento (aaaa-mm-dd)

-CONCURSO: Gestión de cálculos en Concurso a Cargo Laboral
   -> Se registran los datos básicos de cada aspirante al cargo
   -> Se conoce además de cada uno:
       + Puntos por Índice Académico (máx 25)
       + Puntos por Preparador (máx 15)
       + Puntos por diplomas en materias (máx 10)
       + Puntos por edad (10 < 30 años, 5 < 40, 0 otro caso)
   -> El máximo puntaje sumado será de 30 puntos
   -> Contratar al que obtenga mejor puntaje; no se repiten totales
   -> Se reportan los resultados
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/controllers/Cl_cConcurso.ts
const Cl_mConcurso_js_1 = __importDefault(require("../models/Cl_mConcurso.js"));
const I_vConcurso_js_1 = require("../interfaces/I_vConcurso.js");
const Cl_cAspirante_js_1 = __importDefault(require("./Cl_cAspirante.js"));
class Cl_cConcurso {
    mConcurso = new Cl_mConcurso_js_1.default();
    vConcurso;
    cAspirante;
    constructor(vistaConcurso, controladorAspirante) {
        this.vConcurso = vistaConcurso;
        this.cAspirante = controladorAspirante;
        this.vConcurso.onNuevoAspirante(() => this.procesarAspirante());
    }
    procesarAspirante() {
        this.cAspirante.cargarAspirante((aspirante) => {
            if (aspirante !== null) {
                this.mConcurso.procesarAspirante(aspirante);
                // Reportamos ambos datos a la vista
                this.vConcurso.reportar({
                    ganador: this.mConcurso.obtenerGanador(),
                    mejorPuntaje: this.mConcurso.obtenerMejorPuntaje(),
                    edadGanador: this.mConcurso.obtenerEdadGanador(),
                    puntosEdadGanador: this.mConcurso.obtenerPuntosEdadGanador()
                });
            }
        });
    }
}
exports.default = Cl_cConcurso;
//# sourceMappingURL=Cl_cConcurso.js.map