import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Actividades} from "../componentes/actividades";

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

   urlRest = 'http://localhost:8862/api/actividades/';

   private httpClient = inject(HttpClient)

   httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})};

   public listar(){
      return this.httpClient.get<Actividades[]>(this.urlRest+'',this.httpOptions);
   }

   public detalle(serial: number){
      return this.httpClient.get<Actividades>(this.urlRest+`${serial}`,this.httpOptions);
   }

   public crear(actividades: Actividades){
      return this.httpClient.post<Actividades>(this.urlRest, actividades, this.httpOptions);
   }

  constructor() { }
}
