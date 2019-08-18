import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { BibleService } from './services/bible.service';
import { ProgressService } from './services/progress.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BibleService, ProgressService]
})
export class AppModule { 
  constructor(){
    library.add(faThumbsDown);
    library.add(faThumbsUp);
    library.add(faLightbulb);
  }
}
