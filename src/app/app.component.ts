import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharacterConfigComponent} from "./pages/character-config/character-config.component";
import {CharacterGridComponent} from "./pages/character-grid/character-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterConfigComponent,
    CharacterGridComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HungerGames';
}
