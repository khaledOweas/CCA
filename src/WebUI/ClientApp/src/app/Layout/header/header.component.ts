import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { UIService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: TranslocoService, private uiservice: UIService) { }

  ngOnInit(): void {

  }
  change(lang: string) {
    this.service.setActiveLang(lang);
    localStorage.setItem("lang", lang);
    this.uiservice.checkui();

  }
}
