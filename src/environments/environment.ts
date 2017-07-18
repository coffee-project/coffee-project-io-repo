// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAhxWY0zQpZr8_4plD0b3SGW6gbvjUQT9U',
    authDomain: 'coffee-journal-app.firebaseapp.com',
    databaseURL: 'https://coffee-journal-app.firebaseio.com',
    projectId: 'coffee-journal-app',
    storageBucket: 'coffee-journal-app.appspot.com',
    messagingSenderId: '604494717959'
  }
};
