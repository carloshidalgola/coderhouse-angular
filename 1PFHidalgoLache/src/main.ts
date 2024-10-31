import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig as appCoreConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { RootReducer } from './app/store';

const appProviders = [
  ...appCoreConfig.providers,
  importProvidersFrom(
    StoreModule.forRoot(RootReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ),
];

bootstrapApplication(AppComponent, {
  providers: appProviders,
});
