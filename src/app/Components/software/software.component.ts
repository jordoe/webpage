import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goToUrl(url: string): void {
    window.open(url, '_blank');
  }
}
