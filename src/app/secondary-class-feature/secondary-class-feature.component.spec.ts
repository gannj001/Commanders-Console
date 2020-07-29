import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryClassFeatureComponent } from './secondary-class-feature.component';

describe('SecondaryClassFeatureComponent', () => {
  let component: SecondaryClassFeatureComponent;
  let fixture: ComponentFixture<SecondaryClassFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryClassFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryClassFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
