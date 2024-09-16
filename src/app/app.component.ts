import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharacterConfigComponent} from "./pages/character-config/character-config.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterConfigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HungerGames';
}
