import { Component } from '@angular/core';

@Component({
  selector: 'app-character-config',
  standalone: true,
  imports: [],
  templateUrl: './character-config.component.html',
  styleUrl: './character-config.component.css'
})
export class CharacterConfigComponent {
  saveNumSelection() {
    const numPlayers = (document.getElementById('Players') as HTMLSelectElement).value;
    localStorage.setItem('numPlayers', numPlayers);
    alert(`Saved ${numPlayers} players in localStorage.`);
  }

}
