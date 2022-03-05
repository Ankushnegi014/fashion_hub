import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChappalComponent } from './chappal.component';

describe('ChappalComponent', () => {
  let component: ChappalComponent;
  let fixture: ComponentFixture<ChappalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChappalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChappalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
