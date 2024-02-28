import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/usuario.interfaces';
import { USUARIOS } from '../db/usuarios.db';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: IUsuario[] = USUARIOS
  
  getAll(): IUsuario[]{
    return this.usuarios
  }

  getById(id:number): IUsuario | undefined{
    return this.usuarios.find( usuario => usuario.id === id)
  }
  
}
