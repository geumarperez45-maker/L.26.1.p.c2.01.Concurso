export interface I_vConcurso {
    onNuevoAspirante(callback: () => void): void;
    reportar({ ganador, mejorPuntaje, edadGanador, puntosEdadGanador }: {
        ganador: string;
        mejorPuntaje: number;
        edadGanador: number;
        puntosEdadGanador: number;
    }): void;
}
//# sourceMappingURL=I_vConcurso.d.ts.map