import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  constructor(private zone: NgZone) {}

  init(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        this.zone.run(() => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));
  }
}
