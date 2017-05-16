import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template3SectionComponent } from './template-3-section.component';

describe('Template3SectionComponent', () => {
  let component: Template3SectionComponent;
  let fixture: ComponentFixture<Template3SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template3SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template3SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
