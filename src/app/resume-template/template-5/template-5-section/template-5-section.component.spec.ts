import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template5SectionComponent } from './template-5-section.component';

describe('Template5SectionComponent', () => {
  let component: Template5SectionComponent;
  let fixture: ComponentFixture<Template5SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template5SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template5SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
