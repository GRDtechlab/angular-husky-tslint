import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clean-code';
  ngOnInt() {
    console.log('helo world');
  }
  // lets add a comment;
  public run() {}
}
