import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('btnOpen') btnOpen!: ElementRef;
  @ViewChild('btnClose') btnClose!: ElementRef;
  @ViewChild('menuHeader') menuHeader!: ElementRef;

  isMenuOpen = false;
  OpenNCloseMenu() {
    const btnOpenElement = this.btnOpen.nativeElement;
    const btnCloseElement = this.btnClose.nativeElement;
    const menuHeaderElement = this.menuHeader.nativeElement;
    if (!this.isMenuOpen) {
      btnCloseElement.style.visibility = 'visible';
      btnCloseElement.style.opacity = '1';
      menuHeaderElement.style.opacity = '1';
      menuHeaderElement.style.transform = 'translateX(0)';
      btnOpenElement.style.visibility = 'hidden';
    } else {
      btnCloseElement.style.visibility = 'hidden';
      btnCloseElement.style.opacity = '0';
      menuHeaderElement.style.opacity = '0';
      menuHeaderElement.style.transform = 'translateX(100%)';
      btnOpenElement.style.visibility = 'visible';
    }

    this.isMenuOpen = !this.isMenuOpen;
  }
}
