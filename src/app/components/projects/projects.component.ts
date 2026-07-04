import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section-padding">
      <div class="container-custom">
        <div class="section-header reveal">
          <span class="section-label">Portfolio</span>
          <h2 class="section-title">Featured Projects</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">Things I've built that I'm proud of</p>
        </div>

        <div class="projects-grid">
          <div *ngFor="let project of data.projects" class="project-card glass-card reveal" [class.featured]="project.featured">
              <div class="project-top">
                <div class="project-icon" [style.background]="project.gradient">
                  {{ project.featured ? '🚀' : '💻' }}
                </div>
                <span class="featured-badge" *ngIf="project.featured">⭐ Featured</span>
                <div class="project-links">
                  <a *ngIf="project.github" [href]="project.github" target="_blank" class="proj-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a *ngIf="project.demo" [href]="project.demo" target="_blank" class="proj-link" aria-label="Live Demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>

              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <div class="project-features">
                <span *ngFor="let f of project.features.slice(0, 4)" class="feature-tag">✓ {{ f }}</span>
              </div>

              <div class="project-tech">
                <span *ngFor="let t of project.tech" class="tech-badge">{{ t }}</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: 3rem; }
    .projects-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 2rem;
    }
    .project-card {
      padding: 2rem; display: flex; flex-direction: column; gap: 1rem;
      transition: all var(--transition-base);
      &.featured {
        border-color: rgba(108,99,255,0.3);
        background: linear-gradient(135deg, rgba(108,99,255,0.06) 0%, rgba(0,210,211,0.03) 100%);
      }
    }
    .project-top {
      display: flex; align-items: center; gap: 0.75rem;
    }
    .project-icon {
      width: 48px; height: 48px; border-radius: var(--radius-md);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; flex-shrink: 0;
    }
    .featured-badge {
      font-size: 0.75rem; font-weight: 600;
      padding: 0.25rem 0.6rem;
      background: rgba(108,99,255,0.15); border: 1px solid rgba(108,99,255,0.3);
      border-radius: var(--radius-full); color: var(--primary-light);
    }
    .project-links { margin-left: auto; display: flex; gap: 0.5rem; }
    .proj-link {
      width: 36px; height: 36px; border-radius: 50%;
      background: var(--bg-card); border: 1px solid var(--border-color);
      display: flex; align-items: center; justify-content: center;
      color: var(--text-secondary); transition: all var(--transition-fast);
      svg { width: 16px; height: 16px; }
      &:hover { background: var(--primary); color: #fff; border-color: var(--primary); }
    }
    .project-title { font-size: 1.15rem; font-weight: 700; color: var(--text-primary); }
    .project-desc { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; flex: 1; }
    .project-features {
      display: flex; flex-wrap: wrap; gap: 0.4rem;
    }
    .feature-tag {
      font-size: 0.78rem; color: var(--secondary);
      background: rgba(0,210,211,0.08); border: 1px solid rgba(0,210,211,0.2);
      padding: 0.2rem 0.6rem; border-radius: var(--radius-full);
    }
    .project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }

    @media (max-width: 480px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectsComponent {
  data = inject(PortfolioDataService);
}
