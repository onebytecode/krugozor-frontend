import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SectionModule } from './section/section.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        SectionModule
      ]
    }).compileComponents();
  }));

});
