import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Asignatura} from "../componentes/asignatura";

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  urlRest = 'http://localhost:8862/api/asignaturas/';

    private httpClient = inject(HttpClient)

    httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};

    public crear(asignatura: Asignatura){
      return this.httpClient.post<Asignatura>(this.urlRest,asignatura,this.httpOptions);
    }
    public obtener(codigo: number){
      return this.httpClient.get<Asignatura>(this.urlRest+'${codigo}',this.httpOptions);
    }
    public listar(){
        return this.httpClient.get<Asignatura[]>(this.urlRest+'',this.httpOptions);
    }
    public actualizar(asignatura: any){
        return this.httpClient.put<Asignatura>(this.urlRest,asignatura, this.httpOptions);
      }

      public eliminar(codigo: number){
        return this.httpClient.delete<void>(`${this.urlRest}${codigo}`, this.httpOptions);
      }

}
