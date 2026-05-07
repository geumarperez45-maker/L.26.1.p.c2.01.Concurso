// src/interfaces/I_vAspirante.ts
export interface I_vAspirante {
  get nombre(): string;
  get apellido(): string;
  get cedula(): number;
  get sexo(): string;
  get fechaNac(): string; // Se recibe como string del input date
  get puntoIndAcademico(): number;
  get puntoPreparador(): number;
  get puntoDiplomas(): number;
  get estadoCivil(): string;
  
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}