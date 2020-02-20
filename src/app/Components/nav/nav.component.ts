import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() selectContactEvent = new EventEmitter<any>()

  public projectsSelected: number;

  constructor(private router: Router) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.checkRoutes();
        window.scroll(0,0);
      }
    });
  }

  ngOnInit() {
  }

  public selectProjects(num: number): void {
    if (this.projectsSelected === num) {
      this.projectsSelected = undefined;
      this.router.navigateByUrl('/home');
    } else {
      this.projectsSelected = num;
    }
  }

  private checkRoutes(): void {
    if(this.router.url === '/home') {
      this.projectsSelected = undefined;          
    } else if(this.router.url === '/software') {
      this.projectsSelected = 0;
    } else if(this.router.url === '/design') {
      this.projectsSelected = 1;
    } else if(this.router.url === '/videogames') {
      this.projectsSelected = 2;
    }
  }

  public pressContact(): void {
    this.selectContactEvent.emit();
  }
}
