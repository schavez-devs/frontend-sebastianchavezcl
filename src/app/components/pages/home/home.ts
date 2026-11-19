import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../common/hero/hero';
import { Icon } from '../../common/icon/icon';
import { ContactForm } from '../../common/contact-form/contact-form';
import { projects } from '../../../data/projects';
import { ProjectDialog } from '../../common/project-dialog/project-dialog';
@Component({
  selector: 'app-home',
  imports: [RouterLink, Hero, Icon, ContactForm, ProjectDialog],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  projects = ['Gasconnect', 'Simpliboard', 'Agencia Virtual'].map((name, index) => ({
    ...projects.find((project) => project.name === name)!,
    image: `/images/home-project-${index}.webp`,
  }));
  skills = [
    {
      icon: 'web',
      title: 'Desarrollo web',
      text: 'Construcción de aplicaciones web modernas y escalables.',
    },
    {
      icon: 'mobile',
      title: 'Aplicaciones móviles',
      text: 'Desarrollo de aplicaciones móviles multiplataforma.',
    },
    { icon: 'server', title: 'Backend', text: 'APIs, servicios y lógica de negocio.' },
    {
      icon: 'cloud',
      title: 'Cloud y datos',
      text: 'Infraestructura en la nube y gestión de datos.',
    },
  ];
}
