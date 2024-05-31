import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../models/nota';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.css']
})
export class NotaListComponent implements OnInit {
  notas: Nota[] = [];

  constructor(private notaService: NotaService) {}

  ngOnInit(): void {
    this.notaService.listar().subscribe(data => {
      this.notas = data;
    });
  }

  eliminar(id: number): void {
    this.notaService.eliminar(id).subscribe(() => {
      this.notas = this.notas.filter(n => n.id !== id);
    });
  }
}
