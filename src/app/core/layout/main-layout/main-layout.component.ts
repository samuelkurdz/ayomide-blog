import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isNavOpen: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  toggleColor(event) {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    // Switch between `dark` and `light`
    let switchToTheme = currentTheme === "dark" ? "light" : "dark";
    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }


}
