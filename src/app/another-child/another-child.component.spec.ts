import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherChildComponent } from './another-child.component';

describe('AnotherChildComponent', () => {
  let component: AnotherChildComponent;
  let fixture: ComponentFixture<AnotherChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
