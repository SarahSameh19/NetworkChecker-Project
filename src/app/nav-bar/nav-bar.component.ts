import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
  
})

export class NavBarComponent {
  isScrolled: boolean = false;
  scrollThreshold: number = 160;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > this.scrollThreshold;
  }

}
