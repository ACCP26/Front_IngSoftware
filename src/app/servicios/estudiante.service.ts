import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Estudiante} from "../componentes/estudiante";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  urlRest = 'http://localhost:8862/api/estudiantes/';

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

}
