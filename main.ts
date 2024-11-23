import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Use provideRouter for routing configuration
import { AppComponent } from './app/app.component';
import { WorldComponent } from './app/world/world.component';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient for HTTP requests

// Define your routes here
const routes = [
  { path: '', component: WorldComponent }, // Home route pointing to WorldComponent
];

// Modify your appConfig to include the router configuration
const modifiedAppConfig = {
  providers: [
    provideRouter(routes), // Set up routing with the routes defined
    provideHttpClient(), // Setup HttpClient for API calls
  ],
};

// Bootstrap the application with the modified configuration
bootstrapApplication(AppComponent, modifiedAppConfig)
  .catch((err) => console.error(err));
