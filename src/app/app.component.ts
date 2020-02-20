import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'webpageapp';

  private scrollElem;

  constructor(private router: Router, private titleService: Title ) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.scrollElem.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle("Portfolio");
    this.scrollElem = document.getElementById("scroll");
  }

  public contactSelected() {
    this.scrollElem.scroll({
      top: 1000000,
      left: 100,
      behavior: 'smooth'
    });
  }
}
