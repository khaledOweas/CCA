import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor() { }

  checkui(): void {

    const langStored = localStorage.getItem("lang");
    switch (langStored) {
      case 'ar':
        //assets/plugins/global/plugins.bundle.rtl.css
        //assets/plugins/global/plugins.bundle.css
        document.getElementById("pbcss").setAttribute("href", "assets/plugins/global/plugins.bundle.rtl.css")
        document.body.dir = "rtl";
        document.getElementById("html1").style.direction = "rtl";
        document.getElementById("html1").lang = "ar";
        //assets/css/style.bundle.rtl.css
        //assets/css/style.bundle.css
        document.getElementById("sbcss").setAttribute("href", "assets/css/style.bundle.rtl.css")
        break;

      case 'es':
      case 'en':
        //assets/plugins/global/plugins.bundle.rtl.css
        //assets/plugins/global/plugins.bundle.css
        document.getElementById("pbcss").setAttribute("href", "assets/css/style.bundle.css")
        document.body.dir = "ltr";
        document.getElementById("html1").style.direction = "ltr";
        document.getElementById("html1").lang = "en";
        //assets/css/style.bundle.rtl.css
        //assets/css/style.bundle.css
        document.getElementById("sbcss").setAttribute("href", "assets/css/style.bundle.css")
        break;
      default:
        console.log("is this default ")
        document.getElementById("pbcss").setAttribute("href", "assets/css/style.bundle.css")
        document.body.dir = "ltr";
        document.getElementById("html1").style.direction = "ltr";
        document.getElementById("html1").lang = "en";
        document.getElementById("sbcss").setAttribute("href", "assets/css/style.bundle.css")
        break;
    }
    // window.location.reload();
    console.log("heelloo")
  }
}
