import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig as appCoreConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { RootReducer } from './app/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { inscriptionsFeature } from './app/features/dashboard/students/store/inscriptions.reducer';
import { InscriptionsEffects } from './app/features/dashboard/students/store/inscriptions.effects';

const appProviders = [
  ...appCoreConfig.providers,
  importProvidersFrom(
    StoreModule.forRoot(RootReducer, {}),
    StoreModule.forFeature(inscriptionsFeature),
    //EffectsModule.forFeature([InscriptionsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ),
];

bootstrapApplication(AppComponent, {
    providers: appProviders,
    //providers: [provideEffects()]
});
