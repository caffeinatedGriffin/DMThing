import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/observable/timer';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name | date:'shortTime'}}</h1>
    <stat-block-detail></stat-block-detail>
  `
})
export class AppComponent implements OnInit {
  private timer: Subscription;

  name = new Date();

  ngOnInit(): void {
    this.timer = Observable.timer(1000, 1000).subscribe(() => {
      this.name = new Date();
    });
  }
}
