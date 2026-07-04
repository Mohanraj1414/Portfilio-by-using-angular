import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled()" [class.menu-open]="menuOpen()">
      <div class="nav-container">
        <a class="nav-logo" href="#hero">
          <span class="logo-bracket">&lt;</span>MV<span class="logo-bracket">/&gt;</span>
        </a>

        <ul class="nav-links" [class.open]="menuOpen()">
          @for (link of data.navLinks; track link.label) {
            <li>
              <a [href]="link.href" (click)="closeMenu()">{{ link.label }}</a>
            </li>
          }
          <li>
            <a href="assets/Mohanraj_Resume.pdf" download class="nav-resume-btn">Resume</a>
          </li>
        </ul>

        <div class="nav-actions">
          <button class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.isDark() ? 'Switch to light' : 'Switch to dark'">
            {{ theme.isDark() ? '☀️' : '🌙' }}
          </button>
          <button class="hamburger" [class.active]="menuOpen()" (click)="toggleMenu()" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      height: var(--navbar-height);
      transition: all var(--transition-base);
      padding: 0 1.5rem;
    }
    .navbar.scrolled {
      background: rgba(10,10,15,0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border-color);
      box-shadow: var(--shadow-md);
    }
    :host-context([data-theme="light"]) .navbar.scrolled {
      background: rgba(248,249,255,0.85);
    }
    .nav-container {
      max-width: var(--container-max); margin: 0 auto;
      height: 100%; display: flex; align-items: center; justify-content: space-between;
    }
    .nav-logo {
      font-size: 1.4rem; font-weight: 800; color: var(--text-primary);
      font-family: var(--font-mono);
      .logo-bracket { color: var(--primary); }
      &:hover { color: var(--primary); }
    }
    .nav-links {
      display: flex; align-items: center; gap: 0.25rem;
      list-style: none;
      li a {
        padding: 0.5rem 0.9rem;
        color: var(--text-secondary);
        font-size: 0.9rem; font-weight: 500;
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
        &:hover { color: var(--primary); background: rgba(108,99,255,0.08); }
      }
    }
    .nav-resume-btn {
      padding: 0.45rem 1.2rem !important;
      border: 1.5px solid var(--primary) !important;
      border-radius: var(--radius-full) !important;
      color: var(--primary) !important;
      &:hover { background: var(--primary) !important; color: #fff !important; }
    }
    .nav-actions { display: flex; align-items: center; gap: 0.75rem; }
    .theme-toggle {
      background: var(--bg-card); border: 1px solid var(--border-color);
      border-radius: 50%; width: 38px; height: 38px;
      cursor: pointer; font-size: 1rem;
      display: flex; align-items: center; justify-content: center;
      transition: all var(--transition-fast);
      &:hover { border-color: var(--primary); transform: rotate(20deg); }
    }
    .hamburger {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
      span {
        display: block; width: 24px; height: 2px;
        background: var(--text-primary); border-radius: 2px;
        transition: all var(--transition-base);
      }
      &.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      &.active span:nth-child(2) { opacity: 0; }
      &.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }

    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links {
        position: fixed; top: var(--navbar-height); left: 0; right: 0;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
        flex-direction: column; padding: 1.5rem;
        transform: translateY(-100%); opacity: 0; pointer-events: none;
        transition: all var(--transition-base);
        &.open { transform: translateY(0); opacity: 1; pointer-events: all; }
      }
    }
  `]
})
export class NavbarComponent {
  theme = inject(ThemeService);
  data = inject(PortfolioDataService);
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 50); }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu(): void { this.menuOpen.set(false); }
}
