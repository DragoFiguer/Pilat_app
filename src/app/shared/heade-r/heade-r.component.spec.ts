import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeRComponent } from './heade-r.component';

describe('HeadeRComponent', () => {
  let component: HeadeRComponent;
  let fixture: ComponentFixture<HeadeRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadeRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadeRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
