import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../common/hero/hero';
import { ContactBanner } from '../../common/contact-banner/contact-banner';
import { projects } from '../../../data/projects';
import { ProjectDialog } from '../../common/project-dialog/project-dialog';
@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, Hero, ContactBanner, ProjectDialog],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects = projects;
  filter = 'Todos';
  filters = ['Todos', 'Web', 'Móvil', 'Backend'];
  get filteredProjects() {
    return this.projects.filter(
      (p) => this.filter === 'Todos' || p.categories.includes(this.filter),
    );
  }
}
