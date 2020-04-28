import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  toggleClasses = ['hide', 'active'];
  isNavOpen: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
