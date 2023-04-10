import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMarketComponent } from './single-market.component';

describe('SingleMarketComponent', () => {
  let component: SingleMarketComponent;
  let fixture: ComponentFixture<SingleMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
