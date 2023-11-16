# SafariVidFreeze

Project to trigger bug in Safari that appears to occur on pages with lots of images/videos like reddit/imgur.  Scrolling through lists of animated gifs over a certain quantity seems to trigger a crash.  Bug reported to Apple: Jan 30, 2022 at 12:20 PM – FB9867162

Set up your angular environment and run "ng serve" to run the project.

At the top of my messy hacked together angular page there's box for the number of "rows" of images and videos to put on the screen.

Enter a number into the box and press space. This will start scrolling videos and gifs down the screen.  The choppy scrolling 
is because of the fact that Safari doesn't yet support smooth scrolling or something? https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari I've tried a few fixes but
realized that it wasn't important for the bug.  The problem is that the page will eventually cause strange hangs/freezes in the browser

For example, the video might drop to less than 1 fps for a few seconds or even minutes.  The browser might become so locked up that opening a new tab to youtube.com will not work (it'll sit at the page load progress bar forever) even though loading something with no video like XKCD.com will work.

Sometimes this will require restarting the browser.  This also occurs on mobile Safari.  It has happened on every version of iOS iPadOS and macOS I've run
since at least Jan 2022. This occurs on wifi, wired network, mobile.  

Could this possibly be a bug in webkit?

Please take all this with a grain of salt as I'm trying to remember all of the symptoms over a year after reporting it :)









This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
