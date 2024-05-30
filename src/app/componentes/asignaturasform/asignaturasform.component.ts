import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsignaturaService} from "../../servicios/asignatura.service";
import {Asignatura} from "../asignatura";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-asignaturasform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './asignaturasform.component.html',
  styleUrl: './asignaturasform.component.css'
})
export default class AsignaturasformComponent implements OnInit{

    private fb = inject(FormBuilder);
    private asignaturaServicio = inject(AsignaturaService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    form? : FormGroup;
    asignatura? : Asignatura;
    errors?: string[]

    registrar(){

          if(this.form?.invalid){
              return;
          }
          let request: Observable<Asignatura>;
          const asignatura = this.form!.value;

          request = this.asignaturaServicio.crear(asignatura);

          request.subscribe({
            next: () =>{
               this.errors = []
             this.router.navigate(['/']);
            },
            error : response =>{
              this.errors = response.error.errors;
            }
          });
        }


         ngOnInit(): void{
                const codigo = this.route.snapshot.paramMap.get('codigo');
                if(codigo){
                  this.asignaturaServicio.obtener(parseInt(codigo)).subscribe(asignatura => {
                      this.asignatura = asignatura;
                      this.form = this.fb.group({
                           codigo: [asignatura.codigo, [Validators.required]],
                           nombre: [asignatura.nombre, [Validators.required]],
                           periodo: [asignatura.periodo,[Validators.required]]
                      });
                  });
                }else{
                  this.form = this.fb.group({
                    codigo: ['',[Validators.required]],
                    nombre: ['',[Validators.required]],
                    periodo: ['',[Validators.required]]
                  });
                }
            }


}
