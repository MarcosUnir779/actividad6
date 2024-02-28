import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  modelForm: FormGroup;

  constructor(){
    this.modelForm = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required
      ]),
      apellido: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-,]+@([\w-]+\.)+[\w]{2,4}$/)
      ]),
      image: new FormControl(null, [
        Validators.required
      ]),
    }, [])
  }

  guardarUsuario(): void{

  }

  checkControl(formControlName: string, validador: string):boolean | undefined{
    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
  }
}
