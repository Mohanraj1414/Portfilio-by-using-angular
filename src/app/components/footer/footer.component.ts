import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-glow"></div>
      <div class="container-custom">
        <div class="footer-content">
          <div class="footer-brand">
            <a href="#hero" class="footer-logo">
              <span class="logo-bracket">&lt;</span>MV<span class="logo-bracket">/&gt;</span>
            </a>
            <p class="footer-tagline">Python Full Stack Developer · Software Engineer</p>
            <p class="footer-location">📍 Bengaluru, Karnataka</p>
          </div>

          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:mohanrajrdj144@gmail.com">mohanrajrdj144&#64;gmail.com</a></li>
              <li><a href="tel:+917603866044">+91 7603866044</a></li>
              <li><a href="https://www.linkedin.com/in/mohanrajv144" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {{ year }} Mohanraj V. Crafted with ❤️ using Angular 20</p>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/in/mohanrajv144" target="_blank" aria-label="LinkedIn">in</a>
            <a href="mailto:mohanrajrdj144@gmail.com" aria-label="Email">✉</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
      position: relative; overflow: hidden;
    }
    .footer-glow {
      position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 600px; height: 1px;
      background: var(--gradient-primary);
      box-shadow: 0 0 40px rgba(108,99,255,0.4);
    }
    .container-custom { padding-top: 3rem; padding-bottom: 1.5rem; }
    .footer-content {
      display: grid; grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem; margin-bottom: 2.5rem;
    }
    .footer-logo {
      font-size: 1.5rem; font-weight: 800; font-family: var(--font-mono);
      color: var(--text-primary); display: inline-block; margin-bottom: 0.75rem;
      .logo-bracket { color: var(--primary); }
    }
    .footer-tagline { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem; }
    .footer-location { color: var(--text-muted); font-size: 0.82rem; }
    h4 { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase; }
    ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
    li a { color: var(--text-secondary); font-size: 0.88rem; transition: color var(--transition-fast); &:hover { color: var(--primary); } }
    .footer-bottom {
      border-top: 1px solid var(--border-color); padding-top: 1.5rem;
      display: flex; justify-content: space-between; align-items: center;
      p { color: var(--text-muted); font-size: 0.82rem; }
    }
    .footer-socials { display: flex; gap: 0.75rem; }
    .footer-socials a {
      width: 34px; height: 34px; border-radius: 50%;
      background: var(--bg-card); border: 1px solid var(--border-color);
      display: flex; align-items: center; justify-content: center;
      color: var(--text-secondary); font-size: 0.8rem; font-weight: 700;
      transition: all var(--transition-fast);
      &:hover { background: var(--primary); color: #fff; border-color: var(--primary); }
    }
    @media (max-width: 768px) {
      .footer-content { grid-template-columns: 1fr 1fr; }
      .footer-brand { grid-column: 1 / -1; }
      .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
    }
    @media (max-width: 480px) {
      .footer-content { grid-template-columns: 1fr; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
