import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="section-padding">
      <div class="container-custom">
        <div class="section-header reveal">
          <span class="section-label">What I Do</span>
          <h2 class="section-title">Services I Offer</h2>
          <div class="section-divider"></div>
        </div>

        <div class="services-grid">
          @for (service of data.services; track service.title) {
            <div class="service-card glass-card reveal">
              <div class="service-icon">{{ service.icon }}</div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-desc">{{ service.description }}</p>
              <ul class="service-features">
                @for (f of service.features; track f) {
                  <li>{{ f }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: 3rem; }
    .services-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .service-card {
      padding: 2rem; text-align: center;
      transition: all var(--transition-base);
      &:hover .service-icon { transform: scale(1.1) rotate(5deg); }
    }
    .service-icon {
      font-size: 2.5rem; margin-bottom: 1rem;
      display: block; transition: transform var(--transition-base);
    }
    .service-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem; }
    .service-desc { color: var(--text-secondary); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; }
    .service-features {
      list-style: none; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem;
      li {
        font-size: 0.78rem; padding: 0.2rem 0.6rem;
        background: rgba(108,99,255,0.1); border: 1px solid rgba(108,99,255,0.2);
        border-radius: var(--radius-full); color: var(--primary-light);
        font-family: var(--font-mono);
      }
    }
  `]
})
export class ServicesSectionComponent {
  data = inject(PortfolioDataService);
}
