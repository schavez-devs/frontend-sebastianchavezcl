import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio | Sebastián Chavez',
    loadComponent: () => import('./components/pages/home/home').then((c) => c.Home),
  },
  {
    path: 'portafolio',
    title: 'Portafolio | Sebastián Chavez',
    loadComponent: () => import('./components/pages/portfolio/portfolio').then((c) => c.Portfolio),
  },
  {
    path: 'mis-apps',
    title: 'Mis aplicaciones | Sebastián Chavez',
    loadComponent: () => import('./components/pages/apps/apps').then((c) => c.Apps),
  },
  {
    path: 'certificaciones',
    title: 'Formación | Sebastián Chavez',
    loadComponent: () =>
      import('./components/pages/certifications/certifications').then((c) => c.Certifications),
  },
  {
    path: 'contacto',
    title: 'Contacto | Sebastián Chavez',
    loadComponent: () => import('./components/pages/contact/contact').then((c) => c.Contact),
  },
  {
    path: '**',
    loadComponent: () => import('./components/pages/not-found/not-found').then((c) => c.NotFound),
  },
];
