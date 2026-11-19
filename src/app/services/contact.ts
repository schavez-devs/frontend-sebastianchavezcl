import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class Contact {
  compose(data: {
    name: string;
    email: string;
    phone: string;
    reason: string;
    message: string;
  }): string {
    const subject = data.reason || 'Contacto desde sebastianchavez.cl';
    const body = `Nombre: ${data.name}\nCorreo: ${data.email}\nTeléfono: ${data.phone || 'No indicado'}\n\n${data.message}`;
    return `mailto:seba.chavez21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
