import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  let service: Contact;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contact);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Contact email preparation', () => {
  it('encodes message data in a mailto link without treating it as URL parameters', () => {
    const service = new Contact();
    const link = service.compose({
      name: 'María & José',
      email: 'test@example.cl',
      phone: '',
      reason: 'Proyecto web',
      message: 'Hola\n¿Conversamos? & gracias',
    });
    const url = new URL(link);
    expect(url.pathname).toBe('seba.chavez21@gmail.com');
    expect(url.searchParams.get('subject')).toBe('Proyecto web');
    expect(url.searchParams.get('body')).toContain('María & José');
    expect(url.searchParams.get('body')).toContain('Hola\n¿Conversamos? & gracias');
    expect(Array.from(url.searchParams.keys())).toEqual(['subject', 'body']);
  });
});
