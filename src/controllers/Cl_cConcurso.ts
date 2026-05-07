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

// src/controllers/Cl_cConcurso.ts
import Cl_mConcurso from "../models/Cl_mConcurso.js";
import { I_vConcurso } from "../interfaces/I_vConcurso.js";
import Cl_cAspirante from "./Cl_cAspirante.js";

export default class Cl_cConcurso {
  private mConcurso: Cl_mConcurso = new Cl_mConcurso();
  private vConcurso: I_vConcurso;
  private cAspirante: Cl_cAspirante;

  constructor(vistaConcurso: I_vConcurso, controladorAspirante: Cl_cAspirante) {
    this.vConcurso = vistaConcurso;
    this.cAspirante = controladorAspirante;

    this.vConcurso.onNuevoAspirante(() => this.procesarAspirante());
  }

  private procesarAspirante() {
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