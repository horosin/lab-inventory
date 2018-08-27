import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesAddPageComponent } from './samples-add-page.component';

describe('SamplesAddPageComponent', () => {
  let component: SamplesAddPageComponent;
  let fixture: ComponentFixture<SamplesAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
