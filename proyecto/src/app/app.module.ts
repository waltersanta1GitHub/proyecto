import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { SidenavModule } from './component/sidenav/sidenav.module';
import { FooterModule } from './component/footer/footer.module';
import { NavbarModule} from './component/navbar/navbar.module';
import { ToasterComponent } from './component/toaster/toaster.component';
import {ToasterModule} from 'angular5-toaster';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { app_routing } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { AcercadeComponent } from './component/acercade/acercade.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { MODULE_ROUTES } from './component/dashboard/dashboard.routes';

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
    DashboardComponent,
    SidenavComponent,
    InicioComponent,
    AcercadeComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ToasterModule,
    NavbarModule,
    FooterModule,
    RouterModule.forRoot( MODULE_ROUTES),
    app_routing,
  ],
  entryComponents: [SidenavComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent, SidenavComponent]
})
export class AppModule { }
