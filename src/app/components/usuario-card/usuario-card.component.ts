import { Component, Input, inject } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interfaces';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {

  @Input() miUsuario!: IUsuario;

  usuarioService = inject(UsuariosService)
  router = inject(Router)

  async borrarUser() {
    let response = confirm('Seguro que quiere borrar el usuario con id: ' + this.miUsuario._id);
     if(response){
      let res = await this.usuarioService.delete(this.miUsuario._id);
      this.router.navigate(['/users'])
      if(res){
        alert('Se ha borrado correctamente')
      }
    }
  }
}
