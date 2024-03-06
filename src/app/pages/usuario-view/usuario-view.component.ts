import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUsuario } from '../../interfaces/usuario.interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { BotoneraComponent } from '../../components/botonera/botonera.component';

@Component({
  selector: 'app-usuario-view',
  standalone: true,
  imports: [BotoneraComponent],
  templateUrl: './usuario-view.component.html',
  styleUrl: './usuario-view.component.css'
})
export class UsuarioViewComponent {

  activedRoute = inject(ActivatedRoute)
  usuariosService = inject(UsuariosService)
  usuario!: IUsuario

   ngOnInit(){
    this.activedRoute.params.subscribe(async(u:any) => {
      let id = u.id
      console.log(id)
      try {
        this.usuario = await this.usuariosService.getById(id)
        console.log(this.usuario)
      } catch (error) {
        console.log(error)
      }
    })
  }

 
}
