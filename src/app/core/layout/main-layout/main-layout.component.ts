import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isNavOpen: Boolean = false;
  isLight: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  toggleColor(event) {
    // change svg
    this.isLight = !this.isLight;

    // Change our current theme
    const currentTheme = document.documentElement.getAttribute("data-theme");
    // Switch between `dark` and `light`
    let switchToTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }


}
