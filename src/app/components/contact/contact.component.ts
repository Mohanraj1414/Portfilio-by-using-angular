import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section-padding">
      <div class="container-custom">
        <div class="section-header reveal">
          <span class="section-label">Get In Touch</span>
          <h2 class="section-title">Let's Work Together</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">Have a project in mind? Let's build something great.</p>
        </div>

        <div class="contact-cards">
          @for (item of contactItems; track item.label) {
            <a [href]="item.href" [target]="item.external ? '_blank' : '_self'" class="contact-card glass-card reveal">
              <div class="card-icon" [style.background]="item.gradient">{{ item.icon }}</div>
              <h4 class="card-label">{{ item.label }}</h4>
              <p class="card-value">{{ item.value }}</p>
              <span class="card-action">{{ item.action }} →</span>
            </a>
          }
        </div>

        <div class="contact-cta reveal">
          <p>Prefer to connect directly?</p>
          <div class="cta-buttons">
            <a href="mailto:mohanrajrdj144@gmail.com" class="btn-primary-custom">✉ Send Email</a>
            <a href="https://www.linkedin.com/in/mohanrajv144" target="_blank" class="btn-outline-custom">💼 LinkedIn</a>
            <a href="tel:+917603866044" class="btn-outline-custom">📱 Call Me</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { margin-bottom: 3rem; }

    .contact-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .contact-card {
      padding: 2rem; text-align: center;
      display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
      text-decoration: none; color: inherit;
      transition: all var(--transition-base);
    }

    .card-icon {
      width: 64px; height: 64px; border-radius: var(--radius-lg);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.75rem;
      box-shadow: var(--shadow-md);
    }

    .card-label {
      font-size: 0.8rem; font-weight: 600; letter-spacing: 2px;
      text-transform: uppercase; color: var(--text-muted);
    }

    .card-value {
      font-size: 0.95rem; font-weight: 600; color: var(--text-primary);
    }

    .card-action {
      font-size: 0.82rem; color: var(--primary);
      font-weight: 500; opacity: 0;
      transition: opacity var(--transition-fast);
    }

    .contact-card:hover .card-action { opacity: 1; }

    .contact-cta {
      text-align: center;
      p { color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 1rem; }
    }

    .cta-buttons {
      display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;
    }

    @media (max-width: 480px) {
      .contact-cards { grid-template-columns: 1fr 1fr; }
    }
  `]
})
export class ContactComponent {
  contactItems = [
    {
      icon: '📧', label: 'Email', value: 'mohanrajrdj144@gmail.com',
      href: 'mailto:mohanrajrdj144@gmail.com', action: 'Send email',
      gradient: 'linear-gradient(135deg,#6c63ff,#a29bfe)', external: false
    },
    {
      icon: '📱', label: 'Phone', value: '+91 7603866044',
      href: 'tel:+917603866044', action: 'Call now',
      gradient: 'linear-gradient(135deg,#00d2d3,#6c63ff)', external: false
    },
    {
      icon: '💼', label: 'LinkedIn', value: 'mohanrajv144',
      href: 'https://www.linkedin.com/in/mohanrajv144', action: 'View profile',
      gradient: 'linear-gradient(135deg,#0077b5,#6c63ff)', external: true
    },
    {
      icon: '📍', label: 'Location', value: 'Bengaluru, Karnataka',
      href: '#', action: 'Open maps',
      gradient: 'linear-gradient(135deg,#fd79a8,#6c63ff)', external: false
    },
  ];
}
