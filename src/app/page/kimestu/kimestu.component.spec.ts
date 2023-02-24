import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimestuComponent } from './kimestu.component';

describe('KimestuComponent', () => {
  let component: KimestuComponent;
  let fixture: ComponentFixture<KimestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimestuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
