import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Use provideRouter for routing configuration
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { WorldComponent } from './app/world/world.component';

// Define your routes here
const routes = [
  { path: '', component: WorldComponent },
];

// Modify your appConfig to include the router configuration
const modifiedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,  // Keep any other existing providers in appConfig
    provideRouter(routes), // Set up routing with the routes defined
  ],
};

bootstrapApplication(AppComponent, modifiedAppConfig)
  .catch((err) => console.error(err));
