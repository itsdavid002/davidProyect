import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    name: [
      { type: "required", message: "El nombre es obligatorio." },
      { type: "pattern", message: "El nombre ingresado no es valido." }
    ],
    lastName: [
      { type: "required", message: "El apellido es obligatorio." },
      { type: "pattern", message: "El apellido ingresado no es valido." }
    ],
    email: [
      { type: "required", message: "El email es obligatorio." },
      { type: "pattern", message: "El email ingresado no es valido." }
    ],
    password: [
      { type: "required", message: "El password es obligatorio." },
      { type: "pattern", message: "La contraseña ingresada no es valida." }
    ],
    cfPassword: [
      { type: "required", message: "La contraseña es obligatoria." },
      { type: "pattern", message: "La contraseña de confirmación ingresada no es valida." }
    ]
  }
  //crear mensajes de validacion 
  //mensaje de respuesta del registro
  registerMessage: any;

  constructor(private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({

      name: new FormControl(
        "",
        Validators.required,
      ),
      lastName: new FormControl(
        "",
        Validators.required,
      ),
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
      ),
      cfPassword: new FormControl("", Validators.compose([
        Validators.required, Validators.minLength(6)
      ])
      )
    })
  }

  ngOnInit() {
  }

  register(register_data: any) {
    console.log(register_data);
    this.AuthService.registerUser(register_data).then(res => {
      this.registerMessage = res;
      console.log("El usuario ha sido registrado correctamente");
      this.navCtrl.navigateForward('/login');
    }).catch(error => {
      this.registerMessage = error;
    });
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }
}
