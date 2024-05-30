import {Estudiante} from "./estudiante";

export interface Asignatura{
  codigo: number;
  nombre: string;
  periodo: string;
  estudiante: Estudiante[];
}
