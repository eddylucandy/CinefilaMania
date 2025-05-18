import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { RegistroComponent} from './app/registro/registro.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' as const }
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
