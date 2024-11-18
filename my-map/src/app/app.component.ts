import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet to render routed components
import { WorldComponent } from './world/world.component'; // Import the component to route to

@Component({
  selector: 'app-root',
  standalone: true, // Mark the component as standalone
  imports: [
    RouterOutlet // Add RouterOutlet to display routed components
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd280_app'; // Your app's title
}
