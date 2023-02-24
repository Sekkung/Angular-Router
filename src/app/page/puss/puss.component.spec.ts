import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PussComponent } from './puss.component';

describe('PussComponent', () => {
  let component: PussComponent;
  let fixture: ComponentFixture<PussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
