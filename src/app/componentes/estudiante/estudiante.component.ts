import { Component, inject, OnInit } from "@angular/core";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EstudianteService} from "../../servicios/estudiante.service";
import {Estudiante} from "../estudiante";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export default class EstudianteComponent {

    asignaturas = [
        { nombre: 'Matemáticas', id: 1 },
        { nombre: 'Ciencias', id: 2 },
        { nombre: 'Historia', id: 3 },
        // Agrega más asignaturas según sea necesario
      ];

      cortes = ['Primer Corte', 'Segundo Corte', 'Tercer Corte'];

      estudiantes = [
        { nombre: 'Juan Pérez', actividad: 'Examen 1', calificacion: 8.5 },
        { nombre: 'María García', actividad: 'Tarea 1', calificacion: 9.0 },
        { nombre: 'Carlos Sánchez', actividad: 'Proyecto 1', calificacion: 7.5 },
        // Agrega más estudiantes según sea necesario
      ];

      selectAsignatura(asignatura: any) {
        console.log('Asignatura seleccionada:', asignatura);
        // Aquí puedes añadir lógica para actualizar la lista de estudiantes según la asignatura seleccionada
      }

      selectCorte(event: any) {
        const corteSeleccionado = event.target.value;
        console.log('Corte seleccionado:', corteSeleccionado);
        // Aquí puedes añadir lógica para actualizar la lista de estudiantes según el corte seleccionado
      }
}
