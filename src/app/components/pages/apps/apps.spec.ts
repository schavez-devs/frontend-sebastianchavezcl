import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apps } from './apps';

describe('Apps', () => {
  let component: Apps;
  let fixture: ComponentFixture<Apps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [Apps],
    }).compileComponents();

    fixture = TestBed.createComponent(Apps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
