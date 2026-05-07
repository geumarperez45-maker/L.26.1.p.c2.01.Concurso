import { I_vAspirante } from "../interfaces/I_vAspirante.js";

export default class Cl_vAspirante implements I_vAspirante {
  private vista: HTMLElement;
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inFechaNac: HTMLInputElement;
  private inPuntoIndAcademico: HTMLInputElement;
  private inPuntoPreparador: HTMLInputElement;
  private inPuntoDiplomas: HTMLInputElement;
  private inEstadoCivil: HTMLInputElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("aspirante") as HTMLElement;
    this.inNombre = document.getElementById("aspirante_inNombre") as HTMLInputElement;
    this.inApellido = document.getElementById("aspirante_inApellido") as HTMLInputElement;
    this.inCedula = document.getElementById("aspirante_inCedula") as HTMLInputElement;
    this.inSexo = document.getElementById("aspirante_inSexo") as HTMLSelectElement;
    this.inFechaNac = document.getElementById("aspirante_inFechaNac") as HTMLInputElement;
    this.inPuntoIndAcademico = document.getElementById("aspirante_inPuntoIndAcademico") as HTMLInputElement;
    this.inPuntoPreparador = document.getElementById("aspirante_inPuntoPreparador") as HTMLInputElement;
    this.inPuntoDiplomas = document.getElementById("aspirante_inPuntoDiplomas") as HTMLInputElement;
    this.inEstadoCivil = document.getElementById("aspirante_inEstadoCivil") as HTMLInputElement;
    this.btAceptar = document.getElementById("aspirante_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("aspirante_btCancelar") as HTMLButtonElement;
  }

  // Getters para que el controlador lea los valores
  get nombre(): string { return this.inNombre.value; }
  get apellido(): string { return this.inApellido.value; }
  get cedula(): number { return +this.inCedula.value; }
  get sexo(): string { return this.inSexo.value; }
  get fechaNac(): string { return this.inFechaNac.value; }
  get puntoIndAcademico(): number { return +this.inPuntoIndAcademico.value; }
  get puntoPreparador(): number { return +this.inPuntoPreparador.value; }
  get puntoDiplomas(): number { return +this.inPuntoDiplomas.value; }
  get estadoCivil(): string {return this.inEstadoCivil.value; }

  mostrar(): void { this.vista.classList.remove("hidden"); this.vista.hidden = false; }
  ocultar(): void { this.vista.classList.add("hidden"); this.vista.hidden = true; }

  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }
}