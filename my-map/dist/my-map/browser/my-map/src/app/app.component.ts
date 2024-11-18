import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldComponent } from "./world/world.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'd280_app';
}