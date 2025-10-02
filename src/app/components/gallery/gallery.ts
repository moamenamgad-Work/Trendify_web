import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, RouterOutlet],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {}
