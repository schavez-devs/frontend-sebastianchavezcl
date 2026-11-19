import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../common/hero/hero';
import { Icon } from '../../common/icon/icon';
import { ContactBanner } from '../../common/contact-banner/contact-banner';

@Component({
  selector: 'app-certifications',
  imports: [RouterLink, Hero, Icon, ContactBanner],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  certificates = [
    {
      name: 'Técnico en armado de computadores, redes y servidores Linux',
      description: 'Escuela Latinoamericana de Capacitación',
      image: '/images/certificate-0.webp',
    },
    {
      name: 'Analista Programador Computacional',
      description: 'IP Chile',
      image: '/images/certificate-1.webp',
    },
    {
      name: 'AWS Lambda con Serverless Framework',
      description: 'Cloud y backend',
      image: '/images/certificate-2.webp',
    },
    {
      name: 'Pruebas unitarias con Node y Jest',
      description: 'Pruebas de software',
      image: '/images/certificate-3.webp',
    },
    { name: 'Backend con NestJS', description: 'Backend', image: '/images/certificate-4.webp' },
    {
      name: 'Curso básico de Python',
      description: 'Programación',
      image: '/images/certificate-5.webp',
    },
  ];
  selected = this.certificates[0];
}
