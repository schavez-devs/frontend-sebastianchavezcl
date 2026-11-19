import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  let component: Portfolio;
  let fixture: ComponentFixture<Portfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [Portfolio],
    }).compileComponents();

    fixture = TestBed.createComponent(Portfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('filters mobile projects from the rendered cards', async () => {
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelectorAll('.project-card').length).toBe(10);
    expect(page.querySelector('.project-card h3')?.textContent).toContain('Yopag');
    const mobile = Array.from(page.querySelectorAll<HTMLButtonElement>('.filters button')).find(
      (button) => button.textContent?.trim() === 'Móvil',
    )!;
    mobile.click();
    await fixture.whenStable();
    expect(
      Array.from(page.querySelectorAll('.project-card h3'), (heading) =>
        heading.textContent?.trim(),
      ),
    ).toEqual(['Yopag', 'Gasconnect']);
    expect(mobile.getAttribute('aria-pressed')).toBe('true');
    const yopag = Array.from(page.querySelectorAll<HTMLElement>('.project-card')).find(
      (card) => card.querySelector('h3')?.textContent?.trim() === 'Yopag',
    )!;
    const dialog = page.querySelector('dialog')!;
    dialog.showModal = () => dialog.setAttribute('open', '');
    yopag.querySelector<HTMLButtonElement>('.text-link')!.click();
    await fixture.whenStable();
    expect(dialog.querySelector('h2')?.textContent).toContain('Yopag');
    expect(dialog.textContent).toContain('Servipag');
    expect(dialog.querySelector('.tags')?.textContent).toContain('Ionic');
  });

  it('renders the selected project when opening its details', async () => {
    const page = fixture.nativeElement as HTMLElement;
    const dialog = page.querySelector('dialog')!;
    dialog.showModal = () => dialog.setAttribute('open', '');
    const gasconnect = Array.from(page.querySelectorAll<HTMLElement>('.project-card')).find(
      (card) => card.querySelector('h3')?.textContent?.trim() === 'Gasconnect',
    )!;
    gasconnect.querySelector<HTMLButtonElement>('.text-link')!.click();
    await fixture.whenStable();
    expect(dialog.querySelector('h2')?.textContent).toContain('Gasconnect');
    expect(dialog.textContent).toContain('Fusiona');
    expect(dialog.querySelector('.tags')?.textContent).toContain('Ionic');
    expect(dialog.querySelector('.tags')?.textContent).toContain('Leaflet');
  });
});
