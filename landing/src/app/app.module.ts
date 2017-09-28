import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Components declaration
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SectionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }