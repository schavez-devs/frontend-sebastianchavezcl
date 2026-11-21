import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../common/hero/hero';
import { Icon } from '../../common/icon/icon';
import { ContactBanner } from '../../common/contact-banner/contact-banner';

export type AppCategory = 'Web' | 'Móvil' | 'Escritorio';

export interface PersonalApp {
  id: string;
  name: string;
  category: AppCategory;
  panel: string;
  eyebrow: string;
  description: string;
  features: string[];
  note?: string;
  link: string;
  linkLabel: string;
  privacy?: string;
}

@Component({
  selector: 'app-apps',
  imports: [RouterLink, Hero, Icon, ContactBanner],
  templateUrl: './apps.html',
  styleUrl: './apps.scss',
})
export class Apps {
  filter = 'Todas';
  filters = ['Todas', 'Web', 'Móvil', 'Escritorio'];
  apps: PersonalApp[] = [
    {
      id: 'jardines-aurora',
      name: 'Jardines Aurora',
      category: 'Móvil',
      panel: '#173c2c',
      eyebrow: 'Jardinería y huerto',
      description:
        'Conoce tus plantas y organiza los cuidados de tu huerto, jardín o macetas. Consulta fichas de cultivo, aprende a reconocer plagas y registra tus siembras en una agenda que puedes llevar contigo, incluso sin conexión.',
      features: [
        'Enciclopedia de plantas sin conexión',
        'Calendario de siembras y cuidados',
        'Guía de plagas y manejo ecológico',
        'Recordatorios y widgets Android',
      ],
      note: 'Sin necesidad de crear una cuenta. El pronóstico del tiempo es opcional y requiere internet y permiso de ubicación.',
      link: 'https://play.google.com/store/apps/details?id=jardines.aurora.cl',
      linkLabel: 'Ver en Google Play',
      privacy: 'https://dev.d3oshk16ux7ucn.amplifyapp.com/',
    },
    {
      id: 'qr-market',
      name: 'QR Market',
      category: 'Web',
      panel: '#1e1936',
      eyebrow: 'Códigos QR personalizados',
      description:
        'Convierte textos y enlaces en códigos QR, personalízalos con tus colores y un logo o inicial, y expórtalos para compartir o imprimir. El contenido se procesa en tu navegador.',
      features: [
        'Códigos QR para textos y enlaces',
        'Colores, logo o inicial personalizados',
        'Descarga en PNG y SVG',
        'Gratis y sin registro',
      ],
      link: 'https://www.qr-marketapp.com/',
      linkLabel: 'Conocer QR Market',
    },
    {
      id: 'agiup',
      name: 'AgiUp',
      category: 'Web',
      panel: '#132d26',
      eyebrow: 'Gestión de proyectos',
      description:
        'Una plataforma para convertir el trabajo del equipo en progreso visible, reuniendo proyectos, tareas y colaboración en un mismo lugar.',
      features: [
        'Proyectos y espacios de trabajo',
        'Tableros y seguimiento de tareas',
        'Equipos, roles y permisos',
        'Documentos y colaboración',
      ],
      link: 'https://agiup.net/',
      linkLabel: 'Conocer AgiUp',
    },
    {
      id: 'pair-programming',
      name: 'PairProgramming',
      category: 'Web',
      panel: '#111827',
      eyebrow: 'Educación tecnológica',
      description:
        'Una plataforma para aprender programación mediante cursos, proyectos del mundo real y el apoyo de una comunidad activa.',
      features: [
        'Cursos de programación',
        'Aprendizaje a tu propio ritmo',
        'Proyectos inspirados en desafíos reales',
        'Comunidad de estudiantes y mentores',
      ],
      link: 'https://pair-programming.net/',
      linkLabel: 'Conocer PairProgramming',
    },
    {
      id: 'templates-market',
      name: 'Templates Market',
      category: 'Web',
      panel: '#20132d',
      eyebrow: 'Templates y desarrollo',
      description:
        'Un espacio para conocer templates profesionales, diseños web modernos y alternativas de desarrollo personalizado para diferentes tipos de proyectos.',
      features: [
        'Templates profesionales',
        'Diseños web modernos',
        'Opciones para distintos proyectos',
        'Desarrollo personalizado',
      ],
      link: 'https://www.templates-market.com/',
      linkLabel: 'Conocer Templates Market',
    },
    {
      id: 'helpercron-ai',
      name: 'HelperCron AI',
      category: 'Escritorio',
      panel: '#111d2b',
      eyebrow: 'IA para escritorio',
      description:
        'Una aplicación de escritorio potenciada por Ollama para conversar con IA, construir flujos de trabajo inteligentes y automatizar tareas sin depender de herramientas externas.',
      features: [
        'IA local y privacidad',
        'Compatible con modelos de Ollama',
        'Acceso sin conexión',
        'Automatización visual de flujos',
      ],
      link: 'https://www.helpercron.com/',
      linkLabel: 'Conocer HelperCron AI',
    },
  ];

  qrChips = ['PNG', 'SVG', 'Sin registro'];
  agiupStats = [
    { value: '12', label: 'Proyectos' },
    { value: '84%', label: 'Avance' },
    { value: '18', label: 'Equipo' },
  ];
  agiupColumns: { title: string; card?: string }[] = [
    { title: 'Por hacer', card: 'Proyecto de equipo' },
    { title: 'En progreso', card: 'Proyecto de equipo' },
    { title: 'Completado' },
  ];
  pairSteps = ['Cursos de programación', 'Proyectos del mundo real', 'Comunidad y mentoría'];
  templateSwatches = [
    { color: '#bef264', label: 'Landing negocios' },
    { color: '#60a5fa', label: 'Servicios profesionales' },
    { color: '#fb7185', label: 'Marcas modernas' },
    { color: '#fbbf24', label: 'Emprendimientos' },
    { color: '#a78bfa', label: 'Portafolios' },
    { color: '#34d399', label: 'Proyectos únicos' },
  ];
  helperChatItems = [
    'Saludo inicial',
    'Automatización',
    'Modelo local',
    'Nuevo flujo',
    'Documentos',
  ];

  get filteredApps(): PersonalApp[] {
    return this.apps.filter((app) => this.filter === 'Todas' || app.category === this.filter);
  }

  // Oculta una imagen que aún no existe en public/images/products para no mostrar un ícono roto.
  onImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
