import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../../services/contact';
@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  compact = input(false);
  service = inject(Contact);
  composed = false;
  data = { name: '', email: '', phone: '', reason: '', message: '' };
  submit() {
    window.location.href = this.service.compose(this.data);
    this.composed = true;
  }
}
