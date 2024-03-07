import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  modelForm: FormGroup;
  activedRoute = inject(ActivatedRoute)
  tipo: string = 'NUEVO'
  userService = inject(UsuariosService)
  router = inject(Router)
  isActualizar: boolean = false;

  constructor(){
    this.modelForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) 

      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/^^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
      ]),
    }, [])
  }

  ngOnInit(){
     this.activedRoute.params.subscribe(async(params:any) => {
      if(params.id){
        this.tipo = "ACTUALIZAR"
        this.isActualizar = true;
        const response = await this.userService.getById(params.id);
        this.modelForm = new FormGroup({
          _id: new FormControl(response._id, []),
          first_name: new FormControl(response.first_name, [
            Validators.required
          ]),
          last_name: new FormControl(response.last_name, [
            Validators.required
          ]),
          email: new FormControl(response.email, [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          ]),
          image: new FormControl(response.image, [
            Validators.required,
            Validators.pattern(/^^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
          ]),
        }, [])
      }
    })
  }

  async getDataForm(){
    if(this.modelForm.value._id){
      const response = await this.userService.update(this.modelForm.value);
      if(response.id){
        alert(`Usuario ${response.first_name} actualizado correctamente.`)
        this.router.navigate(['/users'])
      }else{
        alert(`Ha habido un error.`)
      }
    }else{
      const response = await this.userService.insert(this.modelForm.value);
      if(response.id){
        alert(`Usuario ${response.first_name} añadido correctamente.`)
        this.router.navigate(['/users'])
      }else{
        alert(`Ha habido un error.`)
      }
    }
    
  }

  checkControl(formControlName: string, validador: string):boolean | undefined{
    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
  }

  checkActualizar():boolean{
    return this.isActualizar;
  }
}
