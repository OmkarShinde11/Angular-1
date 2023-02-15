import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCockpitComponent } from './recipe-cockpit.component';

describe('RecipeCockpitComponent', () => {
  let component: RecipeCockpitComponent;
  let fixture: ComponentFixture<RecipeCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
