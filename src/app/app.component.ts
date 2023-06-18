import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const interval$ =interval(1000);
  }
}
