import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../models/asignatura';

@Component({
  selector: 'app-asignatura-form',
  templateUrl: './asignatura-form.component.html',
  styleUrls: ['./asignatura-form.component.css']
})
export class AsignaturaFormComponent implements OnInit {
  form: FormGroup;
  asignatura: Asignatura | undefined;

  constructor(
    private fb: FormBuilder,
    private asignaturaService: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.asignaturaService.obtener(+codigo).subscribe(asignatura => {
        this.asignatura = asignatura;
        this.form.patchValue(asignatura);
      });
    }
  }

  guardar(): void {
    if (this.form.invalid) {
      return;
    }

    const asignatura: Asignatura = this.form.value;
    if (this.asignatura) {
      this.asignaturaService.actualizar(this.asignatura.codigo, asignatura).subscribe(() => {
        this.router.navigate(['/asignaturas']);
      });
    } else {
      this.asignaturaService.crear(asignatura).subscribe(() => {
        this.router.navigate(['/asignaturas']);
      });
    }
  }
}
