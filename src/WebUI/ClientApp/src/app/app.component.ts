import { Component, OnInit } from '@angular/core';
import { UIService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private uiservice: UIService) {
  }
  ngOnInit(): void {
    this.uiservice.checkui();
  }
  title = 'app';


}
