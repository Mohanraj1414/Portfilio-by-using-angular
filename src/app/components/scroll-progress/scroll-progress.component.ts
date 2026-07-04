import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="scroll-bar" [style.width.%]="progress()"></div>`,
  styles: [`
    .scroll-bar {
      position: fixed; top: 0; left: 0; height: 3px; z-index: 9998;
      background: var(--gradient-primary);
      transition: width 0.1s linear;
      box-shadow: 0 0 10px rgba(108,99,255,0.5);
    }
  `]
})
export class ScrollProgressComponent {
  progress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }
}
