import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.afAuth
      .auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((value: auth.UserCredential) => {
        console.log(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
