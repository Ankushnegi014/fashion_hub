import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheosComponent } from './sheos.component';

describe('SheosComponent', () => {
  let component: SheosComponent;
  let fixture: ComponentFixture<SheosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
