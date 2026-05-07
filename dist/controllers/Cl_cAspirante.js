import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_cAspirante {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // Se suscribe a los eventos de aceptar y cancelar de la vista
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método que llama el controlador del Concurso para abrir esta vista
    cargarAspirante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        // Se crea el modelo con los datos capturados en la vista
        // Nota: La fecha se envía como objeto Date
        this.callback(new Cl_mAspirante({
            nombre: this.vista.nombre,
            apellido: this.vista.apellido,
            cedula: this.vista.cedula,
            sexo: this.vista.sexo,
            fechaNac: new Date(this.vista.fechaNac),
            puntoIndAcademico: this.vista.puntoIndAcademico,
            puntoPreparador: this.vista.puntoPreparador,
            puntoDiplomas: this.vista.puntoDiplomas,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cAspirante.js.map