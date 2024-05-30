import {Asignatura} from "./asignatura";
import {Actividades} from "./actividades";

export interface Estudiante{
  serial: number;
  identificacion: number;
  nombre: string;
  apellido: string;
  asignatura: Asignatura[];
  actividad: Actividades[];

}
