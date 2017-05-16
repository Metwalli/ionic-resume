import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template2SectionComponent } from './template-2-section.component';

describe('Template2SectionComponent', () => {
  let component: Template2SectionComponent;
  let fixture: ComponentFixture<Template2SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template2SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template2SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
