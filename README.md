![API Server tests](https://github.com/amitavroy/react-spa-laravel-typescript/workflows/API%20Server%20tests/badge.svg)

# React Admin

![Admin](https://raw.githubusercontent.com/amitavroy/react-spa-laravel-typescript/923699863249a50d90295506f5e43ab95c7d7e24/client/src/assets/img/admin.png)

This repository is an SPA that I am building using React JS in front end supported by Laravel in the backend for API. 
The entire front end is based on the [Admin LTE](https://github.com/ColorlibHQ/AdminLTE) theme. 
I have not made any change in the CSS, and tried to replicate as much of the functionality as possible but using only React JS.

The application is completely developed in Typescript using the Create React App Typescript template. 

- The PHP code is formatted through PHP-CS-Fixer during the pre-commit hook so you will find consistend code throughout the application followign the rule of phpcsfixer.
- The Javascript / Typescript code is formatted using Prettier dring the pre-commit hook as well.
- API level tests written to ensure maximum test coverage of code.
- Enzyme based tests written to ensure maximum test coverage for React Components.
- Have added Git actions and workflow to ensure tests are executed on each code push and run PHP Unit and Javascript tests cases.
