import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The Ionic Component Documentation showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/image/arca.jpg",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: "slide-1"
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/image/arca.jpg",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: "slide-2"
    },
    {
      title: "",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/image/arca.jpg",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: "slide-3"
    },
    {
      title: "What is Ionic Pro?",
      description: "The <b>Ionic Pro</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/image/arca.jpg",
      help_text: "For more information on Ionic, please see <a href='https://ionicframework.com/docs/'>our docs</a>.",
      class: "slide-4"
    }
  ]

  constructor() {}

}
