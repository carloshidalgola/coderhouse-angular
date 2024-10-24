# 1PFHidalgoLache

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

## Deveopment Steps Guide
1. Create project
ng new 1PFHidalgoLache 

2. Install  and setup Angular Meterial
ng add @angular/material


3. Create structures
| src
| | app
| | | features
| | | | auth
| | | | dashboard +
| | | | | courses
| | | | | users +
| | | | | | user-dialog +
| | | shared +
| | | | directives
| | | | pipes

ng g component features/dashboard --skip-tests
ng g component features/dashboard/users --skip-tests
ng g component features/dashboard/users/user-dialog --skip-tests
ng g module shared  
ng generate directive shared/directives/header --skip-tests
ng g module features/dashboard/categories --routing
ng g guard core/guards/auth --skip-tests
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.