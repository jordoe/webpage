import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.scss']
})
export class VideogamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
