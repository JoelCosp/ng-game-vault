import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeModalComponent } from './creative-modal.component';

describe('CreativeModalComponent', () => {
  let component: CreativeModalComponent;
  let fixture: ComponentFixture<CreativeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
