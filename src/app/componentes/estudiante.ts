export interface Estudiante{
  serial: number;
  identificacion: number;
  nombre: string;
  apellido: string;
  asignatura: Asignatura[];
  actividad: Actividades[];

}
