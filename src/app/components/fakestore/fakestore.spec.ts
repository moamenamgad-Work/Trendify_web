import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fakestore } from './fakestore';

describe('Fakestore', () => {
  let component: Fakestore;
  let fixture: ComponentFixture<Fakestore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fakestore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fakestore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
