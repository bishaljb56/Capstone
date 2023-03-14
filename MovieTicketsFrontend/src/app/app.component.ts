import { Component } from '@angular/core';
import { GlobalConstants } from './commons/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title: string = GlobalConstants.APP_NAME;
}
