import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../common/hero/hero';
import { Icon } from '../../common/icon/icon';
import { ContactForm } from '../../common/contact-form/contact-form';
@Component({
  selector: 'app-contact',
  imports: [RouterLink, Hero, Icon, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
