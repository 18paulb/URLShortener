import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlredirectorComponent } from './urlredirector.component';

describe('UrlredirectorComponent', () => {
  let component: UrlredirectorComponent;
  let fixture: ComponentFixture<UrlredirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlredirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlredirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
