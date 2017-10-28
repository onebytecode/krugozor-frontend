import { SectionModule } from './section/section.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
