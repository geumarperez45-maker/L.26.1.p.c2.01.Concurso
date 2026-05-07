import { I_vAspirante } from "../interfaces/I_vAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default class Cl_cAspirante {
  private vista: I_vAspirante;
  private callback!: (aspirante: Cl_mAspirante | null) => void;

  constructor(vista: I_vAspirante) {
    this.vista = vista;
    // Se suscribe a los eventos de aceptar y cancelar de la vista
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  // Método que llama el controlador del Concurso para abrir esta vista
  cargarAspirante(callback: (aspirante: Cl_mAspirante | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    // Se crea el modelo con los datos capturados en la vista
    // Nota: La fecha se envía como objeto Date
    this.callback(
      new Cl_mAspirante({
        nombre: this.vista.nombre,
        apellido: this.vista.apellido,
        cedula: this.vista.cedula,
        sexo: this.vista.sexo,
        fechaNac: new Date(this.vista.fechaNac), 
        puntoIndAcademico: this.vista.puntoIndAcademico,
        puntoPreparador: this.vista.puntoPreparador,
        puntoDiplomas: this.vista.puntoDiplomas,
        estadoCivil: this.vista.estadoCivil,
      })
    );
    this.vista.ocultar();
  }
}