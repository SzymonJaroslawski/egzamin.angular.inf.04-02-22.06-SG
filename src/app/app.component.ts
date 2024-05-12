import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  egzaminy: string[] = ["Programowanie w C#", "Angular kurs dla początkujących", "Kurs Django"];
  form_name = "";
  form_selected_id = 0;

  public onSubmit() {
    if (this.egzaminy[this.form_selected_id] === undefined) {
      alert("Nieprawidłowy numer kursu")
      return
    }

    console.log(this.form_name)
    console.log(this.egzaminy[this.form_selected_id - 1])
  }
}
