import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <!-- Animated background blobs -->
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>

      <!-- Floating tech icons -->
      <div class="floating-icons">
        @for (icon of floatingIcons; track icon.label) {
          <div class="float-icon" [style]="icon.style">{{ icon.emoji }}</div>
        }
      </div>

      <div class="hero-content container-custom">
        <div class="hero-text">
          <p class="hero-greeting reveal">
            <span class="greeting-line"></span>
            Hi there, I'm
          </p>

          <h1 class="hero-name reveal">Mohanraj V</h1>

          <div class="hero-role reveal">
            <span class="role-prefix">I'm a </span>
            <span class="typed-text">{{ currentRole() }}</span>
            <span class="cursor">|</span>
          </div>

          <p class="hero-bio reveal">
            Python Backend Developer crafting scalable RESTful APIs, AI-powered RAG pipelines,
            and full-stack web applications. Passionate about backend architecture & real-world engineering.
          </p>

          <div class="hero-actions reveal">
            <a href="assets/Mohanraj_Resume.pdf" download class="btn-primary-custom">
              ⬇ Download Resume
            </a>
            <a href="#projects" class="btn-outline-custom">View Projects →</a>
            <a href="#contact" class="btn-outline-custom">Hire Me 🚀</a>
          </div>

          <div class="hero-socials reveal">
            <a href="https://www.linkedin.com/in/mohanrajv144" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:mohanrajrdj144@gmail.com" class="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            </a>
            <a href="tel:+917603866044" class="social-link" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
          </div>
        </div>

        <div class="hero-visual reveal-right">
          <div class="avatar-container">
            <div class="avatar-ring"></div>
            <div class="avatar-inner">
              <div class="avatar-placeholder">MV</div>
            </div>
            <div class="orbit orbit-1">
              <div class="orbit-dot">🐍</div>
            </div>
            <div class="orbit orbit-2">
              <div class="orbit-dot">⚡</div>
            </div>
          </div>

          <div class="stats-grid">
            @for (stat of stats; track stat.label) {
              <div class="stat-card glass-card">
                <span class="stat-value gradient-text">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      padding-top: var(--navbar-height);
      background: var(--bg-primary);
    }

    /* Blobs */
    .blob {
      position: absolute; border-radius: 50%;
      filter: blur(80px); opacity: 0.15;
      animation: blob 8s ease-in-out infinite;
    }
    .blob-1 { width: 500px; height: 500px; background: var(--primary); top: -100px; left: -100px; animation-delay: 0s; }
    .blob-2 { width: 400px; height: 400px; background: var(--secondary); bottom: -50px; right: -50px; animation-delay: 3s; }
    .blob-3 { width: 300px; height: 300px; background: var(--accent); top: 50%; left: 50%; animation-delay: 6s; }

    /* Floating icons */
    .floating-icons { position: absolute; inset: 0; pointer-events: none; }
    .float-icon {
      position: absolute; font-size: 1.5rem; opacity: 0.15;
      animation: float 6s ease-in-out infinite;
    }

    /* Content */
    .hero-content {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 4rem; align-items: center;
      width: 100%; padding: 4rem 1.5rem;
      position: relative; z-index: 1;
    }

    .hero-greeting {
      display: flex; align-items: center; gap: 1rem;
      color: var(--text-secondary); font-size: 1rem;
      margin-bottom: 0.5rem;
      .greeting-line {
        display: inline-block; width: 40px; height: 2px;
        background: var(--primary);
      }
    }

    .hero-name {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 900; line-height: 1.1;
      background: var(--gradient-primary);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .hero-role {
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      color: var(--text-secondary); margin-bottom: 1.5rem;
      .role-prefix { color: var(--text-muted); }
      .typed-text { color: var(--secondary); font-weight: 600; }
      .cursor {
        color: var(--primary); font-weight: 300;
        animation: blink 1s step-end infinite;
      }
    }
    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

    .hero-bio {
      color: var(--text-secondary); font-size: 1rem;
      line-height: 1.8; max-width: 520px; margin-bottom: 2rem;
    }

    .hero-actions {
      display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;
    }

    .hero-socials { display: flex; gap: 1rem; }
    .social-link {
      width: 42px; height: 42px;
      background: var(--bg-card); border: 1px solid var(--border-color);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      color: var(--text-secondary); transition: all var(--transition-base);
      svg { width: 18px; height: 18px; }
      &:hover {
        background: var(--primary); color: #fff;
        border-color: var(--primary); transform: translateY(-3px);
        box-shadow: var(--shadow-glow);
      }
    }

    /* Avatar */
    .hero-visual { display: flex; flex-direction: column; align-items: center; gap: 2rem; }
    .avatar-container {
      position: relative; width: 280px; height: 280px;
      display: flex; align-items: center; justify-content: center;
    }
    .avatar-ring {
      position: absolute; inset: -8px; border-radius: 50%;
      background: var(--gradient-primary);
      animation: spin-slow 8s linear infinite;
      mask: radial-gradient(transparent 60%, black 61%);
      -webkit-mask: radial-gradient(transparent 60%, black 61%);
    }
    .avatar-inner {
      width: 260px; height: 260px; border-radius: 50%;
      background: var(--gradient-card);
      border: 2px solid var(--border-color);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .avatar-placeholder {
      font-size: 5rem; font-weight: 900;
      background: var(--gradient-primary);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .orbit {
      position: absolute; border-radius: 50%;
      border: 1px dashed rgba(108,99,255,0.3);
      display: flex; align-items: flex-start; justify-content: center;
    }
    .orbit-1 { width: 320px; height: 320px; animation: spin-slow 12s linear infinite; }
    .orbit-2 { width: 380px; height: 380px; animation: spin-slow 18s linear infinite reverse; }
    .orbit-dot {
      font-size: 1.5rem; margin-top: -12px;
      background: var(--bg-secondary);
      border-radius: 50%; padding: 4px;
    }

    /* Stats */
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%; }
    .stat-card {
      padding: 1rem; text-align: center;
      .stat-value { display: block; font-size: 1.5rem; font-weight: 800; }
      .stat-label { font-size: 0.75rem; color: var(--text-muted); }
    }

    /* Scroll indicator */
    .scroll-indicator {
      position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
      color: var(--text-muted); font-size: 0.75rem; letter-spacing: 2px;
      animation: float 2s ease-in-out infinite;
    }
    .scroll-mouse {
      width: 24px; height: 38px; border: 2px solid var(--border-color);
      border-radius: 12px; display: flex; justify-content: center; padding-top: 6px;
    }
    .scroll-wheel {
      width: 4px; height: 8px; background: var(--primary);
      border-radius: 2px; animation: scroll-wheel 1.5s ease infinite;
    }
    @keyframes scroll-wheel {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(12px); opacity: 0; }
    }

    @media (max-width: 992px) {
      .hero-content { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
      .hero-greeting, .hero-actions, .hero-socials { justify-content: center; }
      .hero-bio { margin: 0 auto 2rem; }
      .hero-visual { order: -1; }
      .stats-grid { max-width: 360px; }
    }
    @media (max-width: 480px) {
      .avatar-container { width: 220px; height: 220px; }
      .avatar-inner { width: 200px; height: 200px; }
      .orbit-1 { width: 260px; height: 260px; }
      .orbit-2 { width: 310px; height: 310px; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  private roles = ['Python Developer', 'FastAPI Developer', 'Django Developer', 'Backend Engineer', 'Full Stack Developer'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  currentRole = signal('');

  floatingIcons = [
    { emoji: '🐍', label: 'python', style: 'top:15%;left:8%;animation-delay:0s;animation-duration:7s' },
    { emoji: '⚡', label: 'fast', style: 'top:25%;right:10%;animation-delay:1s;animation-duration:6s' },
    { emoji: '🗄️', label: 'db', style: 'bottom:30%;left:5%;animation-delay:2s;animation-duration:8s' },
    { emoji: '🤖', label: 'ai', style: 'bottom:20%;right:8%;animation-delay:0.5s;animation-duration:7s' },
    { emoji: '⚛️', label: 'react', style: 'top:60%;left:12%;animation-delay:3s;animation-duration:9s' },
    { emoji: '🔌', label: 'api', style: 'top:40%;right:5%;animation-delay:1.5s;animation-duration:6s' },
  ];

  stats = [
    { value: '2+', label: 'Projects' },
    { value: '5+', label: 'Tech Stack' },
    { value: '85%', label: 'CGPA' },
  ];

  ngOnInit(): void { this.type(); }
  ngOnDestroy(): void { if (this.timer) clearTimeout(this.timer); }

  private type(): void {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.currentRole.set(current.substring(0, --this.charIndex));
    } else {
      this.currentRole.set(current.substring(0, ++this.charIndex));
    }

    let delay = this.isDeleting ? 60 : 100;
    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 2000; this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 400;
    }
    this.timer = setTimeout(() => this.type(), delay);
  }
}
