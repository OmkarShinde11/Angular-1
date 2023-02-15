import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoclateComponent } from './choclate.component';

describe('ChoclateComponent', () => {
  let component: ChoclateComponent;
  let fixture: ComponentFixture<ChoclateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoclateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoclateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
