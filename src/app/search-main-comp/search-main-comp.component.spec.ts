import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMainCompComponent } from './search-main-comp.component';

describe('SearchMainCompComponent', () => {
  let component: SearchMainCompComponent;
  let fixture: ComponentFixture<SearchMainCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMainCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
