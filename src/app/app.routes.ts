import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { UsuarioViewComponent } from './pages/usuario-view/usuario-view.component';
import { HomeComponent } from './pages/home/home.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';

export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "home"},
    {path: "home", component: HomeComponent, children: [
        {path: "", component: ListaUsuariosComponent},
        ]
    },
    {path: "usuario/:id", component: UsuarioViewComponent},
    {path: "newuser", component: NuevoUsuarioComponent},
    {path: '**', redirectTo: "home"} //Mirar si es necesario error 404
];
