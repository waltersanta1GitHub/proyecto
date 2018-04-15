import { Component, NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular5-toaster';
import { Message } from '../../models/index';


@Component({
  selector: 'toaster-cmp',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})

export class ToasterComponent {

  private toasterService: ToasterService;

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  popToast() {
    this.toasterService.pop('success', 'Args Titulo', 'Args Body');
 }

 showToast(message: Message ) {
  this.toasterService.pop(message.severity, message.summary, message.detail);
}

}

@NgModule({
  imports: [ BrowserAnimationsModule, ToasterModule],
  declarations: [ToasterComponent],
  bootstrap: [ToasterComponent]
})
export class AppModule {}
