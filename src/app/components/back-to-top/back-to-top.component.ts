import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="back-to-top" [class.visible]="visible()" (click)="scrollTop()" aria-label="Back to top">
      <span>↑</span>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
      width: 48px; height: 48px;
      background: var(--gradient-primary);
      color: #fff; border: none; border-radius: 50%;
      font-size: 1.2rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; visibility: hidden; transform: translateY(20px);
      transition: all var(--transition-base);
      box-shadow: var(--shadow-glow);
    }
    .back-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); }
    .back-to-top:hover { transform: translateY(-4px); }
  `]
})
export class BackToTopComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void { this.visible.set(window.scrollY > 400); }

  scrollTop(): void { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
