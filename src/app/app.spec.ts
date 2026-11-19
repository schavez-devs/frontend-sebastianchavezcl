import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the shared navigation and footer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('nav')?.textContent).toContain('Full Stack Developer');
    expect(page.querySelectorAll('nav a').length).toBe(6);
    expect(page.querySelector('footer')?.textContent).toContain('Sebastián Chavez');
  });
});
