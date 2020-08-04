import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryMissionComponent } from './secondary-mission.component';

describe('SecondaryMissionComponent', () => {
  let component: SecondaryMissionComponent;
  let fixture: ComponentFixture<SecondaryMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
