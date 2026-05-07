export default class Cl_mConcurso {
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
//# sourceMappingURL=Cl_mConcurso.js.map