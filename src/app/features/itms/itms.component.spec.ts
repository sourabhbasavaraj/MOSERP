import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITMSComponent } from './itms.component';

describe('ITMSComponent', () => {
  let component: ITMSComponent;
  let fixture: ComponentFixture<ITMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
