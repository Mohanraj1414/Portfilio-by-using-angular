import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section-padding">
      <div class="container-custom">
        <div class="about-grid">
          <div class="about-visual reveal-left">
            <div class="about-image-wrap">
              <div class="about-image-bg"></div>
              <div class="about-image-card glass-card">
                <div class="about-avatar">MV</div>
                <div class="about-badge">
                  <span class="badge-dot"></span>
                  Available for Work
                </div>
              </div>
            </div>
            <div class="about-info-cards">
              @for (info of infoCards; track info.label) {
                <div class="info-card glass-card">
                  <span class="info-icon">{{ info.icon }}</span>
                  <div>
                    <p class="info-value">{{ info.value }}</p>
                    <p class="info-label">{{ info.label }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="about-content reveal">
            <span class="section-label">About Me</span>
            <h2 class="section-title">Crafting Scalable<br>Backend Solutions</h2>
            <div class="section-divider"></div>

            <p class="about-bio">
              Python Backend Developer with experience designing scalable RESTful APIs using
              <strong>FastAPI</strong> and <strong>Django ORM</strong>, backed by PostgreSQL and MySQL.
            </p>
            <p class="about-bio">
              Experienced in implementing <strong>role-based access control (RBAC)</strong>, building
              AI-powered <strong>RAG pipelines</strong> using FAISS and SentenceTransformer embeddings,
              and developing responsive full-stack web applications.
            </p>
            <p class="about-bio">
              Passionate about backend architecture, API design, and solving real-world engineering problems.
            </p>

            <div class="about-highlights">
              @for (h of highlights; track h.text) {
                <div class="highlight-item">
                  <span class="highlight-icon">{{ h.icon }}</span>
                  <span>{{ h.text }}</span>
                </div>
              }
            </div>

            <div class="about-actions">
              <a href="#contact" class="btn-primary-custom">Let's Talk 💬</a>
              <a href="#experience" class="btn-outline-custom">My Experience →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid; grid-template-columns: 1fr 1.2fr;
      gap: 5rem; align-items: center;
    }
    .about-visual { position: relative; }
    .about-image-wrap { position: relative; margin-bottom: 1.5rem; }
    .about-image-bg {
      position: absolute; inset: -20px;
      background: var(--gradient-primary); border-radius: var(--radius-xl);
      opacity: 0.08; filter: blur(30px);
    }
    .about-image-card {
      padding: 2.5rem; text-align: center;
      display: flex; flex-direction: column; align-items: center; gap: 1rem;
    }
    .about-avatar {
      width: 120px; height: 120px; border-radius: 50%;
      background: var(--gradient-primary);
      display: flex; align-items: center; justify-content: center;
      font-size: 2.5rem; font-weight: 900; color: #fff;
      box-shadow: var(--shadow-glow);
    }
    .about-badge {
      display: flex; align-items: center; gap: 0.5rem;
      padding: 0.4rem 1rem;
      background: rgba(0,184,148,0.1); border: 1px solid rgba(0,184,148,0.3);
      border-radius: var(--radius-full); color: var(--success);
      font-size: 0.85rem; font-weight: 500;
    }
    .badge-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--success);
      animation: pulse-glow 1.5s ease infinite;
    }
    .about-info-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .info-card {
      padding: 1rem; display: flex; align-items: center; gap: 0.75rem;
      .info-icon { font-size: 1.5rem; }
      .info-value { font-weight: 600; font-size: 0.9rem; color: var(--text-primary); }
      .info-label { font-size: 0.75rem; color: var(--text-muted); }
    }
    .about-bio {
      color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;
      strong { color: var(--primary-light); }
    }
    .about-highlights {
      display: flex; flex-direction: column; gap: 0.6rem; margin: 1.5rem 0;
    }
    .highlight-item {
      display: flex; align-items: center; gap: 0.75rem;
      color: var(--text-secondary); font-size: 0.95rem;
      .highlight-icon { font-size: 1.1rem; }
    }
    .about-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; }

    @media (max-width: 992px) {
      .about-grid { grid-template-columns: 1fr; gap: 3rem; }
    }
  `]
})
export class AboutComponent {
  infoCards = [
    { icon: '📍', value: 'Bengaluru, KA', label: 'Location' },
    { icon: '📧', value: 'mohanrajrdj144', label: 'Gmail' },
    { icon: '📱', value: '+91 7603866044', label: 'Phone' },
    { icon: '🎓', value: 'MCA — 85%', label: 'Education' },
  ];

  highlights = [
    { icon: '🚀', text: 'FastAPI & Django REST API development' },
    { icon: '🤖', text: 'AI-powered RAG pipelines with FAISS & LangGraph' },
    { icon: '🔐', text: 'Role-Based Access Control (RBAC) implementation' },
    { icon: '🗄️', text: 'PostgreSQL & MySQL database design' },
    { icon: '⚛️', text: 'React & Angular full-stack development' },
  ];
}
