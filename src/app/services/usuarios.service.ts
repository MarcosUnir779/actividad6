import { Injectable, inject } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interfaces';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://peticiones.online/api/users';

  getAll(): Promise<IUsuario[]> {
    return lastValueFrom(this.httpClient.get<{results: IUsuario[]}>(this.baseUrl)
      .pipe(
        map(response => response.results)
      ));
  }
  
  // getAll(): Promise<IUsuario[]>{
  //   return lastValueFrom(this.httpClient.get<IUsuario[]>(this.baseUrl))
  // }
  
  getById(id:string): Promise<IUsuario>{
    console.log(`${this.baseUrl}/$${id}`)
    return lastValueFrom(this.httpClient.get<IUsuario>(`${this.baseUrl}/${id}`))
  }

  delete(id:string): Promise<IUsuario>{
    return lastValueFrom(this.httpClient.delete<IUsuario>(`${this.baseUrl}/${id}`))
  }
  
}
