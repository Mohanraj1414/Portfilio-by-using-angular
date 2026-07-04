import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="section-padding" style="background: var(--bg-secondary)">
      <div class="container-custom">
        <div class="section-header reveal">
          <span class="section-label">Education</span>
          <h2 class="section-title">Academic Background</h2>
          <div class="section-divider"></div>
        </div>

        <div class="edu-grid">
          @for (edu of data.education; track edu.degree) {
            <div class="edu-card glass-card reveal">
              <div class="edu-icon">{{ edu.icon }}</div>
              <div class="edu-content">
                <h3 class="edu-degree">{{ edu.degree }}</h3>
                <p class="edu-institution gradient-text">{{ edu.institution }}</p>
                <div class="edu-meta">
                  <span class="edu-period">📅 {{ edu.period }}</span>
                  <span class="edu-cgpa">🏆 CGPA: {{ edu.cgpa }}</span>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Achievements -->
        <div class="section-header reveal" style="margin-top: 4rem">
          <span class="section-label">Recognition</span>
          <h2 class="section-title">Achievements</h2>
          <div class="section-divider"></div>
        </div>

        <div class="achievements-grid">
          @for (ach of data.achievements; track ach.title) {
            <div class="ach-card glass-card reveal">
              <div class="ach-icon" [style.color]="ach.color">{{ ach.icon }}</div>
              <h4 class="ach-title">{{ ach.title }}</h4>
              <p class="ach-issuer">{{ ach.issuer }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: 2.5rem; }
    .edu-grid { display: flex; flex-direction: column; gap: 1.5rem; }
    .edu-card {
      padding: 2rem; display: flex; align-items: flex-start; gap: 1.5rem;
    }
    .edu-icon { font-size: 2.5rem; flex-shrink: 0; }
    .edu-degree { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.25rem; }
    .edu-institution { font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem; }
    .edu-meta { display: flex; gap: 1.5rem; flex-wrap: wrap; }
    .edu-period, .edu-cgpa {
      font-size: 0.85rem; color: var(--text-secondary);
      font-family: var(--font-mono);
    }
    .achievements-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
    .ach-card { padding: 1.75rem; text-align: center; }
    .ach-icon { font-size: 2.5rem; margin-bottom: 0.75rem; display: block; }
    .ach-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.25rem; }
    .ach-issuer { font-size: 0.82rem; color: var(--text-muted); }

    @media (max-width: 600px) {
      .edu-card { flex-direction: column; }
    }
  `]
})
export class EducationComponent {
  data = inject(PortfolioDataService);
}
