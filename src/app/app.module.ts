import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThumbsUp,
  faThumbsDown,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BibleService } from './services/bible.service';
import { ProgressService } from './services/progress.service';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, CardComponent],
  bootstrap: [AppComponent],
  providers: [BibleService, ProgressService]
})
export class AppModule {
  constructor() {
    library.add(faThumbsDown);
    library.add(faThumbsUp);
    library.add(faLightbulb);
  }
}
