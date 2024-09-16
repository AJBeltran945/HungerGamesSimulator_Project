import { Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-character-grid',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './character-grid.component.html',
  styleUrl: './character-grid.component.css'
})
export class CharacterGridComponent implements OnInit {
  numPlayers: string | number | null = '';
  cells: number[] = [];

  ngOnInit(): void {
    this.cells = Array.from({length: 12}, (_, i) => i + 1);
    this.numPlayers = Number(localStorage.getItem('numPlayers'));
  }
}
