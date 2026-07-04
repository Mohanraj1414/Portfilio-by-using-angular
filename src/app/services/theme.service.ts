import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  toggle(): void {
    this.isDark.update(v => !v);
    document.documentElement.setAttribute(
      'data-theme',
      this.isDark() ? 'dark' : 'light'
    );
  }

  init(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.isDark.set(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
