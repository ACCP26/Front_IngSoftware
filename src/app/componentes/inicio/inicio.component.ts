import { Component, inject, OnInit } from "@angular/core";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EstudianteService} from "../../servicios/estudiante.service";
import {ActividadesService} from "../../servicios/actividades.service";
import {AsignaturaService} from "../../servicios/asignatura.service";
import {Estudiante} from "../estudiante";
import {Actividades} from "../actividades";
import {Asignatura} from "../asignatura";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements OnInit{

  private actividadServicio = inject(ActividadesService)
  private estudianteServicio = inject(EstudianteService)
  private asignaturaServicio = inject(AsignaturaService)

  actividades: Actividades[] = []
  estudiantes: Estudiante[] = []
  asignatura: Asignatura[] = []
  estudiantesPorAsignatura: Estudiante[] = [];


   ngOnInit():void{
    this.consultarActividades();
    this.consultarEstudiantes();
    this.consultarAsignatura();
   }

   consultarEstudiantes(){
      this.estudianteServicio.listar().subscribe((estudiantes)=>{
        this.estudiantes = estudiantes;
        this.asignatura = Array.from(new Set(estudiantes.flatMap(estudiante => estudiante.asignatura)));

      })
   }

   consultarActividades(){
      this.actividadServicio.listar().subscribe((actividades)=>{
        this.actividades = actividades;
      });
   }

   consultarAsignatura(){
      this.asignaturaServicio.listar().subscribe((asignatura)=>{
        this.asignatura = asignatura;
      });
   }

   consultarEstudiantesPorAsignatura(codigo: number) {
       this.estudianteServicio.obtenerEstudiantesPorAsignatura(codigo).subscribe(estudiantes => {
         this.estudiantes = estudiantes;
       });
     }


           selectCorte(event: any) {
             const corteSeleccionado = event.target.value;
             console.log('Corte seleccionado:', corteSeleccionado);
             // Aquí puedes añadir lógica para actualizar la lista de estudiantes según el corte seleccionado
           }
}
