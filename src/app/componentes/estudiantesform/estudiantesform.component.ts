import { Component, inject, OnInit } from "@angular/core";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EstudianteService} from "../../servicios/estudiante.service";
import {Estudiante} from "../estudiante";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-estudiantesform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './estudiantesform.component.html',
  styleUrl: './estudiantesform.component.css'
})

export default class EstudiantesformComponent implements OnInit {

    private fb = inject(FormBuilder);
    private estudianteServicio = inject(EstudianteService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    form? : FormGroup;
    estudiante? : Estudiante;
    errors?: string[]

    registrar(){

      if(this.form?.invalid){
          return;
      }
      let request: Observable<Estudiante>;
      const estudiante = this.form!.value;

       request = this.estudianteServicio.crear(estudiante);


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
        const id = this.route.snapshot.paramMap.get('id');
        if(id){
          this.estudianteServicio.obtener(parseInt(id)).subscribe(estudiante => {
              this.estudiante = estudiante;
              this.form = this.fb.group({
                   id: [estudiante.identificacion],
                   nombre: [estudiante.nombre, [Validators.required]],
                   apellido: [estudiante.apellido,[Validators.required]]
              });
          });
        }else{
          this.form = this.fb.group({
            nombre: ['',[Validators.required]],
            apellido: ['',[Validators.required]]
          });
        }
    }

}
