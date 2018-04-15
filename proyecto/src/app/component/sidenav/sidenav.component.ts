import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidenav-routes.config';
import * as $ from 'jquery';
import { MaterialModule } from '../../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'sidenav-cmp',
  templateUrl: './sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SidenavComponent implements OnInit {
    showFiller = false;
    public menuItems: any[];
    ngOnInit() {

        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    constructor(private router: Router) { }

    redirect(pagename: string) {
        this.router.navigate(['/' + pagename]);
      }
}

