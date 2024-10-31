import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { RootReducer } from './app/store';
 

export const appConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot(RootReducer, {}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    )
  ],
};
