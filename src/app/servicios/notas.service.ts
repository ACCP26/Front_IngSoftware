import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Notas} from "../componentes/notas";

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  urlRest = 'http://localhost:8862/api/notas/';

    private httpClient = inject(HttpClient)

    httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};

    public crear(estudiante: Estudiante){
      return this.httpClient.post<Estudiante>(this.urlRest,estudiante,this.httpOptions);
    }
    public obtener(id: number){
      return this.httpClient.get<Estudiante>(this.urlRest+'${id}',this.httpOptions);
    }
    public listar(){
        return this.httpClient.get<Estudiante[]>(this.urlRest+'',this.httpOptions);
    }
    public obtenerEstudiantesPorAsignatura(codigo: number){
     return this.httpClient.get<Estudiante[]>(`${this.urlRest}codigoAsignatura/${codigo}`, this.httpOptions);
    }
   public actualizar(estudiante: any){
           return this.httpClient.put<Estudiante>(this.urlRest,estudiante, this.httpOptions);
         }

         public eliminar(identificacion: number){
           return this.httpClient.delete(`${this.urlRest}${identificacion}`, this.httpOptions);
         }
}
