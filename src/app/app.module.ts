import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//********************************************************* */
//  REDUX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { applicationReducers } from './modules/kernel/redux/reducers.index';
//********************************************************* */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(applicationReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
      autoPause: true, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
