import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html',
    styleUrls: [ 'footer.component.css']
})

export class FooterComponent {
    test: Date = new Date();
}
