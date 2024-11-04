import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredRestaurentsComponent } from './filtered-restaurents.component';

describe('FilteredRestaurentsComponent', () => {
  let component: FilteredRestaurentsComponent;
  let fixture: ComponentFixture<FilteredRestaurentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredRestaurentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredRestaurentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
