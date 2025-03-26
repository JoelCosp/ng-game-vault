import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesListCardComponent } from './videogames-list-card.component';

describe('VideogamesListCardComponent', () => {
  let component: VideogamesListCardComponent;
  let fixture: ComponentFixture<VideogamesListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogamesListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideogamesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
