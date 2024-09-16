import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-character-config',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './character-config.component.html',
  styleUrl: './character-config.component.css'
})
export class CharacterConfigComponent {
  saveNumSelection() {
    const numPlayers = (document.getElementById('Players') as HTMLSelectElement).value;
    localStorage.setItem('numPlayers', numPlayers);
    alert(`Saved ${numPlayers} players in localStorage.`);
  }

  formData = {
    name: '',
    image: '',
    gender: 'Male'
  };

  savedDataArray: any[] = [];
  numPlayers: string | null = localStorage.getItem('numPlayers');


  onSubmit() {
    if (this.savedDataArray.length < this.maxSubmissions) {
      this.savedDataArray.push({ ...this.formData });
      //alert('Form Data Saved Successfully!');
      console.log(this.savedDataArray);

      this.resetForm();
    } else {
      alert('Player limit reached. Cannot add more players.');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      image: '',
      gender: 'Male'
    };
  }
}
