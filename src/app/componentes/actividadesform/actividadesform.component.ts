import { Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActividadesService} from "../../servicios/actividades.service";
import {Actividades} from "../actividades";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-actividadesform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './actividadesform.component.html',
  styleUrl: './actividadesform.component.css'
})

export default class ActividadesformComponent implements OnInit{

      private fb = inject(FormBuilder);
      private actividadServicio = inject(ActividadesService);
      private router = inject(Router);
      private route = inject(ActivatedRoute);
      form? : FormGroup;
      actividad? : Actividades;
      errors?: string[]

      cortes = [1,2,3];

      registrar(){

        if(this.form?.invalid){
            return;
        }
        let request: Observable<Actividades>;
        const actividad = this.form!.value;

        request = this.actividadServicio.crear(actividad);

        request.subscribe({
          next: () =>{
            this.errors = []
          this.router.navigate(['/']);
          },
          error: response =>{
            this.errors = response.error.errors;
          }
        });
      }

      ngOnInit(): void{
          const serial = this.route.snapshot.paramMap.get('serial');
          if(serial){
            this.actividadServicio.detalle(parseInt(serial)).subscribe(actividad =>{
              this.actividad = actividad;
              this.form = this.fb.group({
                  serial: [actividad.serial],
                  nombre: [actividad.nombre,[Validators.required]],
                  corte:  [actividad.corte, [Validators.required]],
                  peso: [actividad.peso, [Validators.required]],
                  descripcion: [actividad.descripcion]
              });
            });
          }else{
             this.form = this.fb.group({
               nombre: ['',[Validators.required]],
               corte: ['',[Validators.required]],
               peso: ['',[Validators.required]],
               descripcion: ['']
             });
          }
      }
}
