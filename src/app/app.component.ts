import { Component } from '@angular/core';
import { hello } from '../scripts/custom.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  ngOnInit()  {
      hello()

  }
}
