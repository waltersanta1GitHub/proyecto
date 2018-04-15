import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from '../inicio/inicio.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { AcercadeComponent } from '../acercade/acercade.component';



export const MODULE_ROUTES: Route[] = [
    { path: 'inicio', component: InicioComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'acercade', component: AcercadeComponent }
];

export const MODULE_COMPONENTS = [
];

