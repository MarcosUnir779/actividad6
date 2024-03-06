import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  async borrarUser() {
    console.log(this.idUser)
    let response = confirm('Seguro que quiere borrar el usuario con id: ' + this.idUser);
     if(response){
      let res = await this.usuarioService.delete(this.idUser);
      if(res){
        alert('Se ha borrado correctamente')
      }
    }
  }
}
