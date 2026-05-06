import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    importProvidersFrom(BrowserModule, ToastrModule.forRoot()),
    provideToastr(), // Toastr providers
    provideAnimations(),
  ]
};
