import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudianteService.listar().subscribe(data => {
      this.estudiantes = data;
    });
  }

  eliminar(id: number): void {
    this.estudianteService.eliminar(id).subscribe(() => {
      this.estudiantes = this.estudiantes.filter(e => e.id !== id);
    });
  }
}
