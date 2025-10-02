import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Service } from "./components/service/service";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Gallery } from "./components/gallery/gallery";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Service, About, Contact, Footer, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-project';
}
