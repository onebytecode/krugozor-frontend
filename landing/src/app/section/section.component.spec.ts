import { SectionComponent } from './section.component';
import { TestBed } from '@angular/core/testing';
describe('SectionComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        SectionComponent
      ]
    }).compileComponents();
  });

  it('should be thruty', async () => {
    const fixture = TestBed.createComponent(SectionComponent);
    const section = fixture.debugElement.componentInstance;
    expect(section).toBeTruthy();
  });
});
