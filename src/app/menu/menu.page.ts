import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    console.log("cerrar menu")
    this.menu.close();
  }
  logout() {
    this.navCtrl.navigateRoot("/login")
  }
  goIntro() {
    this.navCtrl.navigateRoot("menu/intro")
  }
  goToHome() {
    this.navCtrl.navigateRoot("menu/home")
  }
}
