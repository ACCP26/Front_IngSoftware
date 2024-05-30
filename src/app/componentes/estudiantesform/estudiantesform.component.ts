import { Component, inject, OnInit } from "@angular/core";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators} from "@angular/forms";
import {EstudianteService} from "../../servicios/estudiante.service";
import {AsignaturaService} from "../../servicios/asignatura.service";
import {Estudiante} from "../estudiante";
import {Asignatura} from "../asignatura";
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
    private asignaturaServicio = inject(AsignaturaService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    form? : FormGroup;
    estudiante? : Estudiante;
    asignatura: Asignatura[] = [];
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
        this.asignaturaServicio.listar().subscribe((asignatura)=>{
          this.asignatura = asignatura;
        });

        const identificacion = this.route.snapshot.paramMap.get('identificacion');
        if(identificacion){
          this.estudianteServicio.obtener(parseInt(identificacion)).subscribe(estudiante => {
              this.estudiante = estudiante;
          const asignaturaFormArray = this.fb.array(
                  estudiante.asignatura.map((asignatura: Asignatura) => this.fb.control(asignatura.codigo)));

              this.form = this.fb.group({
                   identificacion: [estudiante.identificacion],
                   nombre: [estudiante.nombre, [Validators.required]],
                   apellido: [estudiante.apellido,[Validators.required]],
                   asignatura: asignaturaFormArray
              });
          });
        }else{
          this.form = this.fb.group({
            identificacion: ['',[Validators.required]],
            nombre: ['',[Validators.required]],
            apellido: ['',[Validators.required]],
            asignatura: this.fb.array([])
          });
        }
    }

    get asignaturasLista(){
      return this.form!.get("asignatura") as FormArray;
    }

    onCheckboxChange(e: any) {
        const asignaturasArray: FormArray = this.form!.get('asignatura') as FormArray;
        if (e.target.checked) {
          asignaturasArray.push(this.fb.control(Number(e.target.value)));
        } else {
          const index = asignaturasArray.controls.findIndex(x => x.value === e.target.value);
          asignaturasArray.removeAt(index);
        }
      }

}
