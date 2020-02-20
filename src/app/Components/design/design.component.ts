import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
