import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section-padding" style="background: var(--bg-secondary)">
      <div class="container-custom">
        <div class="section-header reveal">
          <span class="section-label">Work Experience</span>
          <h2 class="section-title">Where I've Worked</h2>
          <div class="section-divider"></div>
        </div>

        <div class="timeline">
          @for (exp of data.experiences; track exp.id) {
            <div class="timeline-item reveal">
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                <div class="marker-line"></div>
              </div>

              <div class="timeline-content">
                <div class="exp-header glass-card">
                  <div class="exp-meta">
                    <h3 class="exp-role">{{ exp.role }}</h3>
                    <p class="exp-company gradient-text">{{ exp.company }}</p>
                    <span class="exp-period">📅 {{ exp.period }}</span>
                  </div>
                  <div class="exp-badge">Current</div>
                </div>

                <div class="exp-projects">
                  @for (proj of exp.projects; track proj.name) {
                    <div class="project-card glass-card">
                      <h4 class="proj-name">🔹 {{ proj.name }}</h4>
                      <ul class="resp-list">
                        @for (r of proj.responsibilities; track r) {
                          <li>{{ r }}</li>
                        }
                      </ul>
                      <div class="proj-tech">
                        @for (t of proj.tech; track t) {
                          <span class="tech-badge">{{ t }}</span>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: 3rem; }
    .timeline { position: relative; }
    .timeline-item { display: grid; grid-template-columns: 40px 1fr; gap: 1.5rem; margin-bottom: 2rem; }
    .timeline-marker { display: flex; flex-direction: column; align-items: center; padding-top: 1.5rem; }
    .marker-dot {
      width: 16px; height: 16px; border-radius: 50%;
      background: var(--gradient-primary);
      box-shadow: var(--shadow-glow); flex-shrink: 0;
      animation: pulse-glow 2s ease infinite;
    }
    .marker-line { flex: 1; width: 2px; background: var(--border-color); margin-top: 8px; }
    .exp-header {
      padding: 1.5rem; margin-bottom: 1rem;
      display: flex; justify-content: space-between; align-items: flex-start;
    }
    .exp-role { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.25rem; }
    .exp-company { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
    .exp-period { font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); }
    .exp-badge {
      padding: 0.3rem 0.8rem;
      background: rgba(0,184,148,0.1); border: 1px solid rgba(0,184,148,0.3);
      border-radius: var(--radius-full); color: var(--success);
      font-size: 0.75rem; font-weight: 600; white-space: nowrap;
    }
    .exp-projects { display: flex; flex-direction: column; gap: 1rem; }
    .project-card { padding: 1.5rem; }
    .proj-name { font-size: 1rem; font-weight: 600; color: var(--primary-light); margin-bottom: 1rem; }
    .resp-list {
      list-style: none; display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem;
      li {
        color: var(--text-secondary); font-size: 0.9rem; padding-left: 1rem; position: relative;
        &::before { content: '▸'; position: absolute; left: 0; color: var(--primary); }
      }
    }
    .proj-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }

    @media (max-width: 600px) {
      .timeline-item { grid-template-columns: 1fr; }
      .timeline-marker { display: none; }
      .exp-header { flex-direction: column; gap: 0.75rem; }
    }
  `]
})
export class ExperienceComponent {
  data = inject(PortfolioDataService);
}
