import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "EL FESTIVAL DE LA LEYENDA VALLENATA",
      description: "SE ALISTA PARA CELEBRAR SU VERSIÓN No. 57 EN HOMENAJE AL CANTANTE IVÁN VILLAZÓN APONTE",
      image: "../../assets/image/festival_vallenato.png",
      help_text: "PRÓXIMAMENTE DOS GRANDES ARTISTAS DE TALLA INTERNACIONAL, SE SUMARÁN PARA COMPLETAR EL LINE UP OFICIAL",
      class: "slide-1",
    },
  ]
  constructor(private router: Router) { }

  goToAbout() {
    console.log("go to home")
    this.router.navigateByUrl("/home")
  }

  ngOnInit() {
  }

}
