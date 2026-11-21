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
      image: '/images/certificate-0.jpg',
    },
    {
      name: 'Analista Programador Computacional',
      description: 'IP Chile',
      image: '/images/certificate-1.jpg',
    },
    {
      name: 'Ingeniería en informática',
      description: 'Instituto de Ciencias tecnológicas CIISA',
      image: '/images/certificate-ing.jpg',
    },
    {
      name: 'AWS Lambda con Serverless Framework',
      description: 'Cloud y backend',
      image: '/images/certificate-2.jpg',
    },
    {
      name: 'Pruebas unitarias con Node y Jest',
      description: 'Pruebas de software',
      image: '/images/certificate-3.jpg',
    },
    { name: 'Curso básico de Python', description: 'Programación', image: '/images/certificate-4.png' },
    {
      name: 'Backend con NestJS',
      description: 'Backend',
      image: '/images/certificate-5.png',
    },
    {
      name: 'Frontend con ReactJS',
      description: 'Frontend',
      image: '/images/certificate-6.jpg',
    },
  ];
  selected = this.certificates[0];
}
