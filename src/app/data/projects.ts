export interface Project {
  name: string;
  description: string;
  image: string;
  detail: string;
  technologies: string[];
  categories: string[];
}
// Proyectos ordenados del más reciente al más antiguo.
export const projects: Project[] = [
  {
    name: 'Yopag',
    description:
      'Aplicación móvil de Servipag con Ionic, microservicios en NestJS y Express.js, Python y Drupal.',
    image: '/images/yopag.svg',
    detail:
      'Como Full Stack Developer contratado por Inovabiz, presté servicios para Servipag y participé en el desarrollo de Yopag: una aplicación móvil construida con Ionic, con un backend desarrollado en NestJS y Express.js bajo una arquitectura de microservicios. En el proyecto también trabajé con Python, Drupal, GCP, MongoDB, PostgreSQL y Redis.',
    technologies: [
      'Ionic',
      'NestJS',
      'Express.js',
      'Python',
      'Microservicios',
      'GCP',
      'Drupal',
      'MongoDB',
      'PostgreSQL',
      'Redis',
    ],
    categories: ['Móvil', 'Backend'],
  },
  {
    name: 'Gasconnect',
    description: 'Aplicaciones móviles de pedidos de gas y plataformas web de administración.',
    image: '/images/gasconnect.webp',
    detail:
      'En Fusiona, participé en el desarrollo y mantención de las aplicaciones móviles de Gasconnect con Ionic, orientadas a clientes y conductores, y de sus plataformas de administración con Angular. Colaboré en la migración de Google Maps a Leaflet, dentro de un ecosistema integrado con un backend en Node.js y el framework Hapi, utilizando MongoDB como base de datos. Durante la última etapa también participé en la gestión del proyecto: reuniones con el cliente, estimaciones de tiempo y coordinación con el equipo de desarrollo.',
    technologies: [
      'Ionic',
      'Angular',
      'Node.js',
      'Hapi',
      'AngularJS',
      'MongoDB',
      'Firebase',
      'Google Maps',
      'Leaflet',
    ],
    categories: ['Web', 'Móvil', 'Backend'],
  },
  {
    name: 'Simpliboard',
    description:
      'Plataforma de gestión de emprendimientos con Angular y arquitectura serverless en AWS.',
    image: '/images/simpliboard.webp',
    detail:
      'Como Full Stack Engineer en Corellia Labs, participé en el desarrollo e implementación de Simpliboard, una plataforma para la gestión de emprendimientos basada en arquitectura serverless de AWS. Desarrollé el frontend con Angular y Bootstrap, y el backend con Node.js y AWS Lambda. La solución utilizó Amazon DynamoDB como base de datos, Cognito para la autenticación, API Gateway para las APIs y SES para el envío de correos, con control de versiones en CodeCommit.',
    technologies: [
      'Angular',
      'Node.js',
      'AWS Lambda',
      'Amazon DynamoDB',
      'Amazon Cognito',
      'Amazon API Gateway',
      'Amazon SES',
      'AWS CodeCommit',
      'Bootstrap',
    ],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'Condonaciones',
    description:
      'Sistema de cálculo de multas e intereses por pagos atrasados, con reportes en PDF y Excel.',
    image: '/images/condonaciones.webp',
    detail:
      'En Caja 18, desarrollé una aplicación web para calcular multas e intereses de empresas con atrasos en el pago de planillas. Implementé la solución con ASP.NET sobre .NET Framework, C# y SQL Server, incorporando administración de usuarios y generación de reportes en PDF y Excel. El desarrollo se realizó bajo metodologías tradicionales, en función de los procesos del negocio.',
    technologies: ['.NET Framework', 'C#', 'SQL Server', 'ASP.NET', 'jQuery'],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'Botón de pago Servipag',
    description:
      'Integración de pagos con Servipag para la compra de entradas y emisión de comprobantes.',
    image: '/images/servipag.webp',
    detail:
      'En Caja 18, participé en la mantención de una aplicación web para la compra de entradas de Cineplanet y Buin Zoo. Trabajé en la integración con el botón de pago de Servipag, la emisión de boletas en PDF y su envío por correo electrónico, utilizando ASP.NET sobre .NET Framework, C# y SQL Server, bajo metodologías tradicionales de desarrollo.',
    technologies: ['.NET Framework', 'C#', 'SQL Server', 'ASP.NET', 'jQuery'],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'Usuarios Buin Zoo',
    description: 'Plataforma de administración de usuarios para las aplicaciones de Buin Zoo.',
    image: '/images/usuarios.webp',
    detail:
      'En Caja 18, desarrollé una plataforma para centralizar la administración de usuarios de múltiples aplicaciones de Buin Zoo. Implementé las operaciones de creación, modificación y eliminación de usuarios con Angular y Bootstrap en el frontend, y ASP.NET Web API sobre .NET Framework, C# y SQL Server en el backend, siguiendo metodologías tradicionales de desarrollo.',
    technologies: ['Angular', 'ASP.NET Web API', 'C#', '.NET Framework', 'SQL Server', 'Bootstrap'],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'Convenios CCAF18',
    description:
      'Aplicaciones de venta de cupones y descarga de la tarjeta virtual de beneficios de Caja 18.',
    image: '/images/convenios.webp',
    detail:
      'En Caja 18, participé en el desarrollo de aplicaciones para la venta de cupones de convenios, entre ellos Pizza Pizza, Club Sibarita, Flores Premium y PetClick. También trabajé en la descarga de la tarjeta virtual para trabajadores y pensionados. Las soluciones se implementaron con ASP.NET sobre .NET Framework, C# y SQL Server, bajo metodologías tradicionales de desarrollo.',
    technologies: ['.NET Framework', 'C#', 'SQL Server', 'ASP.NET', 'jQuery'],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'Validación de tickets',
    description:
      'Sistema de validación de entradas de Buin Zoo para controlar su uso y evitar reutilizaciones.',
    image: '/images/tickets.webp',
    detail:
      'En Caja 18, desarrollé una aplicación web para validar las entradas de Buin Zoo vendidas a través de la institución. El sistema verificaba la validez de cada ticket y registraba su uso para impedir una segunda utilización. La solución se desarrolló con ASP.NET sobre .NET Framework, C# y SQL Server, bajo metodologías tradicionales de desarrollo.',
    technologies: ['.NET Framework', 'C#', 'SQL Server', 'ASP.NET', 'jQuery'],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'Agencia Virtual',
    description:
      'Plataforma de atención y gestión de operaciones para clientes y empresas afiliadas a Caja 18.',
    image: '/images/agencia.webp',
    detail:
      'En Caja 18, participé en la mantención de la Agencia Virtual, una plataforma web para la gestión de operaciones de clientes y empresas afiliadas. Trabajé con ASP.NET sobre .NET Framework, C# y SQL Server para mantener las funcionalidades vinculadas a los procesos del negocio, siguiendo metodologías tradicionales de planificación, desarrollo y entrega.',
    technologies: ['.NET Framework', 'C#', 'SQL Server', 'ASP.NET', 'jQuery'],
    categories: ['Web', 'Backend'],
  },
  {
    name: 'PIN Impresora',
    description:
      'Aplicación de envío de códigos PIN por correo electrónico para el servicio de impresión.',
    image: '/images/pin.webp',
    detail:
      'Desarrollé mi primera aplicación web en Caja 18 para enviar por correo electrónico el PIN necesario para utilizar el servicio de impresión. Implementé la solución con ASP.NET sobre .NET Framework, C# y SQL Server, dentro de un proceso de desarrollo basado en metodologías tradicionales.',
    technologies: ['.NET Framework', 'C#', 'SQL Server', 'ASP.NET', 'jQuery'],
    categories: ['Web', 'Backend'],
  },
];
