import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUsuario } from '../../interfaces/usuario.interfaces';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioCardComponent } from '../../components/usuario-card/usuario-card.component';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [UsuarioCardComponent],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  arrUsuarios: IUsuario [] = []
  usuarioService = inject(UsuariosService)

  async ngOnInit(){
    try {
      this.arrUsuarios = await this.usuarioService.getAll();
    } catch (error) {
      console.log(error)
    }
  }

}
