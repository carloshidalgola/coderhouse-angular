# Coderhouse - Angular v18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Primera Entrega

Objetivos generales:
- Definir las bases iniciales de un proyecto frontend basado en Angular, integrando 10 trabajado en clases hasta el momento y respetando los aspectos técnicos y funcionales esenciales.

Objetivos específicos:
- Crear la estructura de archivos con componentes separados.
- Crear interfaces para el tratamiento de datos.
- Uso correcto de angular material.

## Aspectos a incluir en el entregable 

- Proyecto Angular CLI con Angular. +
- Componentes de layout que incluya un navbar para el menú lateral y un toolbar para el título de la app. +
- Componentes: Lista de Alumnos y ABM de Alumnos. +/-
- Formularios Reactivos de ABM de alumnos.
- Lógica y estructura de representación de datos en listado, utilizando tablas de Angular +
- Material tomando sus datos de arrays y funciones typescript. +
- Pipe personalizado para mostrar el nombre junto al apellido de los alumnos +
- Directiva personalizada para que las cabeceras o títulos tengan letra tamaño 20. +
- Uso de la librería de bootstrap (instalada en el angular.json, no usar cdn) (opc)
- Subir el código a repositorio de GitHub

## Development steps guide
1. Create project
ng new 1PFHidalgoLache 

2. Install  and setup Angular Meterial
ng add @angular/material

3. Create structures
<pre>
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
</pre>

3. Common Commands
- ng g component features/dashboard --skip-tests
- ng g component features/dashboard/users --skip-tests
- ng g component features/dashboard/users/user-dialog --skip-tests
- ng g module shared  
- ng generate directive shared/directives/header --skip-tests
- ng g module features/dashboard/categories --routing
- ng g guard core/guards/auth --skip-tests
- ng g environments
- ng serve --configuration production
- ng test //ejecuta las pruebas unitarias. con "x"describe se anulan las pruebas de la clase
- ng test --code-coverage
- npx json-server db.json --watch
- ng add @ngrx/store-devtools@lastest //complemento browser
- ng add @ngrx/store //Trabajar con Redux
- npm install @ngrx/store @ngrx/store-devtools
- npm install @ngrx/store-devtools@latest
- ng add @ngrx/schematics //Añadir extensión de Angular CLI para trabajar con NgRx Feature Store
- ng add @ngrx/effects@latest 
- ng g feature features/dashboard/inscriptions --skip-tests //N load N  ../sa
