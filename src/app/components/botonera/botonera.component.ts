import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-botonera',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  @Input() idUser: string = "";
  usuarioService = inject(UsuariosService)
  router = inject(Router)
  async borrarUser() {
    let response = confirm('Seguro que quiere borrar el usuario con id: ' + this.idUser);
     if(response){
      let res = await this.usuarioService.delete(this.idUser);
      this.router.navigate(['/users'])
      if(res){
        alert('Se ha borrado correctamente')
      }
    }
  }
}
