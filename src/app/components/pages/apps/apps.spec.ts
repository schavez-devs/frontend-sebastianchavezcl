import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Apps } from './apps';

describe('Apps', () => {
  let component: Apps;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [Apps],
    }).compileComponents();

    const fixture = TestBed.createComponent(Apps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the six published apps', () => {
    expect(component.apps).toHaveLength(6);
    expect(component.apps.map((app) => app.name)).toEqual([
      'Jardines Aurora',
      'QR Market',
      'AgiUp',
      'PairProgramming',
      'Templates Market',
      'HelperCron AI',
    ]);
  });

  it('should expose one filter per app category plus "Todas"', () => {
    expect(component.filters).toEqual(['Todas', 'Web', 'Móvil', 'Escritorio']);
  });

  it('should return every app when the filter is "Todas"', () => {
    component.filter = 'Todas';
    expect(component.filteredApps).toHaveLength(6);
  });

  it('should filter apps by category', () => {
    component.filter = 'Web';
    expect(component.filteredApps.map((app) => app.name)).toEqual([
      'QR Market',
      'AgiUp',
      'PairProgramming',
      'Templates Market',
    ]);

    component.filter = 'Móvil';
    expect(component.filteredApps.map((app) => app.name)).toEqual(['Jardines Aurora']);

    component.filter = 'Escritorio';
    expect(component.filteredApps.map((app) => app.name)).toEqual(['HelperCron AI']);
  });

  it('should require a link for every app', () => {
    for (const app of component.apps) {
      expect(app.link).toMatch(/^https:\/\//);
      expect(app.features.length).toBeGreaterThan(0);
    }
  });
});
