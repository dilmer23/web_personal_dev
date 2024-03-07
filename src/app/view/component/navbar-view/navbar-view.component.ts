import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-view',
  templateUrl: './navbar-view.component.html',
  styleUrls: ['./navbar-view.component.css']
})
export class NavbarViewComponent implements OnInit {
  icons: boolean = true;
  ngOnInit(): void {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (userPrefersDark) {
      this.setTheme('dark');
      this.icons = true;
    }

    if (userPrefersLight) {
      this.setTheme('light');
      this.icons = false;
    }
  }

  setTheme(theme: string) {
    document.documentElement.className = theme;
    console.log(theme)
  }

  toggleTheme() {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);


    if (newTheme === 'dark') {
      this.icons = true;
    } else {
      this.icons = false;
    }
  }
} 