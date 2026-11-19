# Sebastianchavezcl

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Diseño del portafolio

La aplicación reproduce las cinco referencias de `../recursos`: inicio, portafolio, mis aplicaciones, formación y contacto. El diseño se adapta a móvil, con menú desplegable, filtros y detalles en ventanas modales.

- Los proyectos profesionales y sus descripciones se configuran en `src/app/data/projects.ts`.
- Las aplicaciones y certificados se configuran en sus componentes de página. Actualmente conservan las vistas previas del diseño; sustituirlas por datos, documentos y enlaces definitivos.
- `public/images/README.md` describe la procedencia de las imágenes.
- El contacto usa `mailto:` a la dirección existente en el portafolio anterior. Valida los campos y prepara el mensaje en el cliente de correo del visitante; no incluye un backend de envío.
- Para producción, el servidor debe servir `index.html` como alternativa para las rutas de Angular.

Validación local: `npm run build` y `npm test -- --watch=false`.
