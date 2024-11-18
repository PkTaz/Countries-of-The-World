import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldComponent } from './world.component';
import { provideHttpClient } from '@angular/common/http';

describe('WorldComponent', () => {
  let component: WorldComponent;
  let fixture: ComponentFixture<WorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [WorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
