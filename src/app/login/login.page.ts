import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup; // declara la propiedad LoginForm
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatorio." },
      { type: "pattern", message: "El email ingresado no es valido." }
    ],
    // crear validaciones para password
    password: [
      { type: "required", message: "El password es obligatorio." },
      { type: "pattern", message: "El password ingresado no es valido." }
    ]
  }
  loginMessage: any;
  constructor(private formBuilder: FormBuilder, private AuthService: AuthService, private navCtrl: NavController, private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl("", Validators.compose([
        Validators.required, Validators.minLength(6)
      ])
      )
    })
  }

  ngOnInit() {
  }

  login(login_data: any) {
    console.log(login_data);
    this.AuthService.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn', true);
      console.log("login correcto me voy al home");
      this.navCtrl.navigateForward('menu/home');
    }).catch(error => {
      this.loginMessage = error;
    });
  }
}