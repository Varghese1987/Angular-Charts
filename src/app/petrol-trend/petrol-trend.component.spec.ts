import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolTrendComponent } from './petrol-trend.component';

describe('PetrolTrendComponent', () => {
  let component: PetrolTrendComponent;
  let fixture: ComponentFixture<PetrolTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetrolTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetrolTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
