import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterConfigComponent } from './character-config.component';

describe('CharacterConfigComponent', () => {
  let component: CharacterConfigComponent;
  let fixture: ComponentFixture<CharacterConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
