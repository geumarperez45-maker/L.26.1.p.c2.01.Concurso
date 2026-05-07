import { I_vConcurso } from "../interfaces/I_vConcurso.js";
export default class Cl_vConcurso implements I_vConcurso {
    private btNuevo;
    private lblGanador;
    private lblMejorPuntaje;
    private lblEdad;
    private lblPuntosEdad;
    constructor();
    onNuevoAspirante(callback: () => void): void;
    reportar({ ganador, mejorPuntaje, edadGanador, puntosEdadGanador }: {
        ganador: string;
        mejorPuntaje: number;
        edadGanador: number;
        puntosEdadGanador: number;
    }): void;
}
//# sourceMappingURL=Cl_vConcurso.d.ts.map