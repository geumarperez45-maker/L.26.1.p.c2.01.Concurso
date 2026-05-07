import  Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
    private mejorPuntaje: number = 0;
    private nombreGanador: string = "";
    private edadGanador: number = 0;
    private puntosEdadGanador: number = 0;

    procesarAspirante(aspirante: Cl_mAspirante): void {
        const puntajeTotal = aspirante.calcularPuntajeTotal();
        if (puntajeTotal > this.mejorPuntaje) {
            this.mejorPuntaje = puntajeTotal;
            this.nombreGanador = `${aspirante.nombre} ${aspirante.apellido}`;
            this.edadGanador = aspirante.calcularEdad();
            this.puntosEdadGanador = aspirante.calcularPuntosEdad();
        }

    }

    // Reportar resultados del concurso
    
    obtenerGanador(): string {
        return this.nombreGanador;
    }

    obtenerMejorPuntaje(): number {
        return this.mejorPuntaje;
    }

    obtenerEdadGanador(): number {
        return this.edadGanador;
    }

    obtenerPuntosEdadGanador(): number {
        return this.puntosEdadGanador;
    }
}
        