import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-overlay" [class.hidden]="!visible()">
      <div class="loader-content">
        <div class="loader-logo">MV</div>
        <div class="loader-bar">
          <div class="loader-progress"></div>
        </div>
        <p class="loader-text">Loading Portfolio...</p>
      </div>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: var(--bg-primary);
      display: flex; align-items: center; justify-content: center;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    .loader-overlay.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
    .loader-content { text-align: center; }
    .loader-logo {
      font-size: 3rem; font-weight: 900;
      background: var(--gradient-primary);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: pulse-glow 1.5s ease infinite;
      margin-bottom: 2rem;
    }
    .loader-bar {
      width: 200px; height: 3px;
      background: var(--border-color);
      border-radius: var(--radius-full);
      overflow: hidden; margin: 0 auto 1rem;
    }
    .loader-progress {
      height: 100%;
      background: var(--gradient-primary);
      border-radius: var(--radius-full);
      animation: load 1.8s ease forwards;
    }
    .loader-text { color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 2px; }
    @keyframes load { from { width: 0; } to { width: 100%; } }
  `]
})
export class LoaderComponent implements OnInit {
  visible = signal(true);

  ngOnInit(): void {
    setTimeout(() => this.visible.set(false), 2000);
  }
}
