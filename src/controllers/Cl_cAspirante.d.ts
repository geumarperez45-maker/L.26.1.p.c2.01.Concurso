import { I_vAspirante } from "../interfaces/I_vAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_cAspirante {
    private vista;
    private callback;
    constructor(vista: I_vAspirante);
    cargarAspirante(callback: (aspirante: Cl_mAspirante | null) => void): void;
    private btCancelarOnClick;
    private btAceptarOnClick;
}
//# sourceMappingURL=Cl_cAspirante.d.ts.map