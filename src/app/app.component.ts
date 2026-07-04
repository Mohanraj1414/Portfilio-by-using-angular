import { Component, OnInit, inject } from '@angular/core';

import { ThemeService } from './services/theme.service';
import { ScrollRevealService } from './services/scroll-reveal.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoaderComponent,
    ScrollProgressComponent,
    BackToTopComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ServicesSectionComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-loader />
    <app-scroll-progress />
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-services-section />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
    <app-back-to-top />
  `
})
export class AppComponent implements OnInit {
  private theme = inject(ThemeService);
  private scrollReveal = inject(ScrollRevealService);

  ngOnInit(): void {
    this.theme.init();
    // Init scroll reveal after a short delay to let DOM render
    setTimeout(() => this.scrollReveal.init(), 300);
  }
}
