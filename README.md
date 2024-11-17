Coderhouse - Angular
This project was generated with Angular CLI version 18.2.3.

Project
Objetivos generales: Definir las bases iniciales de un proyecto frontend basado en Angular, integrando lo trabajado en clases hasta el momento y respetando los aspectos técnicos y funcionales esenciales.

Aspectos a incluir en el entregable
Componentes y Elementos de un proyecto Angular
Interpolación y Directivas
Comunicación entre componentes
Formularios en Angular / Reactive Forms
Angular Material
Pipes y Directivas personalizadas
Servicios y RxJS
ntroducción a la programación reactiva con RXJS
Router
Módulos
Lazy Loading de módulos y Guards
Llamadas API REST
Test Unitarios en Angular
Patrón de diseño Redux con NgRx
Feature store en NgRx
Effects en NgRx
Development steps guide
Create project ng new 1PFHidalgoLache

Install and setup Angular Meterial ng add @angular/material

Create structures

| src
| | app
| | | core
| | | | guards
| | | | injection-tokens
| | | | mocks
| | | | providers
| | | | services
| | | features
| | | | 404
| | | | auth
| | | | | login
| | | | | modles
| | | | | register
| | | | dashboard
| | | | | courses
| | | | | home
| | | | | students 
| | | shared 
| | | | directives
| | | | pipes
| | | | utils
| | | store
| | environments
Common Commands
ng g component features/dashboard --skip-tests
ng g component features/dashboard/users --skip-tests
ng g component features/dashboard/users/user-dialog --skip-tests
ng g module shared
ng generate directive shared/directives/header --skip-tests
ng g module features/dashboard/categories --routing
ng g guard core/guards/auth --skip-tests
ng g environments
ng serve --configuration production
ng test //ejecuta las pruebas unitarias. con "x"describe se anulan las pruebas de la clase
ng test --code-coverage
npx json-server db.json --watch
ng add @ngrx/store-devtools@lastest //complemento browser
ng add @ngrx/store //Trabajar con Redux
npm install @ngrx/store @ngrx/store-devtools
npm install @ngrx/store-devtools@latest
ng add @ngrx/schematics //Añadir extensión de Angular CLI para trabajar con NgRx Feature Store
ng add @ngrx/effects@latest
ng g feature features/dashboard/inscriptions --skip-tests //N load N ../sa
