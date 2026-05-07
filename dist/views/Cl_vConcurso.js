export default class Cl_vConcurso {
    btNuevo;
    lblGanador;
    lblMejorPuntaje;
    lblEdad;
    lblPuntosEdad;
    constructor() {
        this.btNuevo = document.getElementById("concurso_btNuevo");
        this.lblGanador = document.getElementById("concurso_lblGanador");
        this.lblMejorPuntaje = document.getElementById("concurso_lblMejorPuntaje");
        this.lblEdad = document.getElementById("concurso_lblEdad");
        this.lblPuntosEdad = document.getElementById("concurso_lblPuntosEdad");
    }
    onNuevoAspirante(callback) {
        this.btNuevo.onclick = callback;
    }
    // Aquí es donde se reflejan los resultados
    reportar({ ganador, mejorPuntaje, edadGanador, puntosEdadGanador }) {
        this.lblGanador.innerHTML = ganador;
        this.lblMejorPuntaje.innerHTML = mejorPuntaje.toString();
        this.lblEdad.innerHTML = edadGanador.toString();
        this.lblPuntosEdad.innerHTML = puntosEdadGanador.toString();
    }
}
//# sourceMappingURL=Cl_vConcurso.js.map