import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {

  @Input() miUsuario!: IUsuario;
}
