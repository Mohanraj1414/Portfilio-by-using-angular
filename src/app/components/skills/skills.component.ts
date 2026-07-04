import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section-padding" style="background: var(--bg-secondary)">
      <div class="container-custom">
        <div class="section-header reveal">
          <span class="section-label">Technical Skills</span>
          <h2 class="section-title">My Tech Stack</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">Technologies I work with</p>
        </div>

        <div class="skills-grid">
          @for (cat of data.skillCategories; track cat.name) {
            <div class="skill-category glass-card reveal">
              <div class="cat-header">
                <span class="cat-icon">{{ cat.icon }}</span>
                <h3 class="cat-name">{{ cat.name }}</h3>
              </div>
              <div class="skill-tags">
                @for (skill of cat.skills; track skill) {
                  <span class="skill-tag">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: 3rem; }
    .skills-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .skill-category { padding: 1.75rem; }
    .cat-header {
      display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;
    }
    .cat-icon { font-size: 1.75rem; }
    .cat-name { font-size: 1rem; font-weight: 700; color: var(--text-primary); }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .skill-tag {
      padding: 0.35rem 0.85rem;
      background: rgba(108,99,255,0.1);
      border: 1px solid rgba(108,99,255,0.2);
      border-radius: var(--radius-full);
      color: var(--primary-light);
      font-size: 0.82rem; font-weight: 500;
      font-family: var(--font-mono);
      transition: all var(--transition-fast);
      cursor: default;
      &:hover {
        background: rgba(108,99,255,0.25);
        border-color: var(--primary);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(108,99,255,0.2);
      }
    }
  `]
})
export class SkillsComponent {
  data = inject(PortfolioDataService);
}
