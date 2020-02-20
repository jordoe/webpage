import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private scrollElem;

  constructor(private router: Router) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.scrollElem.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });;
      }
    });
  }

  ngOnInit() {
    this.scrollElem = document.getElementById("scroll");
  }

  title = 'webpageapp';
}
