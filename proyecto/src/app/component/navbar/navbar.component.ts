import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ROUTES } from '../sidenav/sidenav-routes.config';
import { ToasterService} from 'angular5-toaster';
import { Message } from '../../models/messagemodel';

@Component({
  selector: 'navbar-cmp',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    objToaster: Message[];
    private listTitles: any[];
    location: Location;
    constructor(location: Location, private toasterService: ToasterService) {
        this.objToaster = [];
        this.location = location;
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
    }
    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee.charAt(0) === '#') {
            titlee = titlee.slice( 2 );
        }
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
 }
