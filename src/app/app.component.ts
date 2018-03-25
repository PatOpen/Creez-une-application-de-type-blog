import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
          const config = {
              apiKey: 'AIzaSyC_2w451MuvVVUYekS8a_9_g8ldRZT7MLQ',
              authDomain: 'angular-activite.firebaseapp.com',
              databaseURL: 'https://angular-activite.firebaseio.com',
              projectId: 'angular-activite',
              storageBucket: 'angular-activite.appspot.com',
              messagingSenderId: '178715162341'
          };
      firebase.initializeApp(config);
  }
}
