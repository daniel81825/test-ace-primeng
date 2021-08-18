# TestAcePrimeng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.
* V0.0.1 initial angular 12.2.1. done with node v14.17.1, npm 6.14.13
* V0.0.2 primeng 12.1.0-rc.1, primicons 4.1.0 and styles as in the get-started.
* V0.0.3 ace-builds@1.4.12 plus an test implementation (unfortunatly only partially working)
* Some experiments with ace and css settings, great in bigger, problem in smaller

## Testing the issues with resizable primeng-ace-editors
* ng serve => http://localhost:4200/
* Click on tiny button on the top left to get one or more editor windows.
* insert with return multiple lines to exceed current windo size
* resize the dialog and look what is happening
### Current issues
* it takes a short delay between sizing bigger and take over from the ace editor
* bigger seems to work, smaller there is an issue with a scrollbar of the p-dialog

## Software Structure:
* src/app/app.component.html/.ts: 
* * windowsconfigurations for handling multiple diaalogs
* * button in the top left, don't know, why it is so small.
* src/app/window/window.component.ts/.html:
* * definition of one p-dialog with 
* * dynamic configuration, handle events and the embedding of the editor component
* src/app/editor/editor.component.html/.ts:
* * app-ace-editor, some buttons and confimation services
* * logic to initialize and resizing for the dialog.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
