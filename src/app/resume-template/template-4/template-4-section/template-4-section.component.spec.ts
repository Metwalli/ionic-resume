import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template4SectionComponent } from './template-4-section.component';

describe('Template4SectionComponent', () => {
  let component: Template4SectionComponent;
  let fixture: ComponentFixture<Template4SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template4SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template4SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
