import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_vConcurso implements I_vConcurso {
  private btNuevo: HTMLButtonElement;
  private lblGanador: HTMLElement;
  private lblMejorPuntaje: HTMLElement;
  private lblEdad: HTMLElement;
  private lblPuntosEdad: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("concurso_btNuevo") as HTMLButtonElement;
    this.lblGanador = document.getElementById("concurso_lblGanador") as HTMLElement;
    this.lblMejorPuntaje = document.getElementById("concurso_lblMejorPuntaje") as HTMLElement;
    this.lblEdad = document.getElementById("concurso_lblEdad") as HTMLElement;
    this.lblPuntosEdad = document.getElementById("concurso_lblPuntosEdad") as HTMLElement;
  }

  onNuevoAspirante(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  // Aquí es donde se reflejan los resultados
  reportar({ ganador, mejorPuntaje, edadGanador, puntosEdadGanador }: { ganador: string; mejorPuntaje: number; edadGanador: number; puntosEdadGanador: number }): void {
    this.lblGanador.innerHTML = ganador;
    this.lblMejorPuntaje.innerHTML = mejorPuntaje.toString();
    this.lblEdad.innerHTML = edadGanador.toString();
    this.lblPuntosEdad.innerHTML = puntosEdadGanador.toString();
  }
}