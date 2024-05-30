import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../models/asignatura';

@Component({
  selector: 'app-asignatura-list',
  templateUrl: './asignatura-list.component.html',
  styleUrls: ['./asignatura-list.component.css']
})
export class AsignaturaListComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private asignaturaService: AsignaturaService) {}

  ngOnInit(): void {
    this.asignaturaService.listar().subscribe(data => {
      this.asignaturas = data;
    });
  }

  eliminar(codigo: number): void {
    this.asignaturaService.eliminar(codigo).subscribe(() => {
      this.asignaturas = this.asignaturas.filter(a => a.codigo !== codigo);
    });
  }
}
