import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: TranslocoService) { }

  ngOnInit(): void {

  }
  change(lang: string) {
    this.service.setActiveLang(lang);
  }
}
