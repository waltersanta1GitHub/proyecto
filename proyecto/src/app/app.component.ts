import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location, PathLocationStrategy } from '@angular/common';
import * as $ from 'jquery';

import { ToasterService } from 'angular5-toaster';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  respuesta = '';
  showRespuesta = '';
  mostrarSpinner = false;
  location: Location;

  verRespuesta() {
    this.mostrarSpinner = true;

    setTimeout(() => {
      this.showRespuesta = this.respuesta;
      this.mostrarSpinner = false;
    }, 2000);

  }

  constructor(location: Location) {
      this.location = location;
  }

  ngOnInit() {
  }
  public isMaps(path) {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice(1);
      if (path === titlee) {
          return false;
      } else {
          return true;
      }
  }

}


