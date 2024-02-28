import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from '../../interfaces/usuario.interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-view',
  standalone: true,
  imports: [],
  templateUrl: './usuario-view.component.html',
  styleUrl: './usuario-view.component.css'
})
export class UsuarioViewComponent {

  activedRoute = inject(ActivatedRoute)
  usuariosService = inject(UsuariosService)
  usuario!: IUsuario

  ngOnInit(){
    this.activedRoute.params.subscribe((u:any) => {
      let id = Number(u.id)
      let response = this.usuariosService.getById(id)
      if(response !== undefined){
        this.usuario = response
      }
    })
  }
}
