import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../common/hero/hero';
import { Icon } from '../../common/icon/icon';
import { ContactBanner } from '../../common/contact-banner/contact-banner';

@Component({
  selector: 'app-apps',
  imports: [RouterLink, Hero, Icon, ContactBanner],
  templateUrl: './apps.html',
  styleUrl: './apps.scss',
})
export class Apps {
  filter = 'Todas';
  filters = ['Todas', 'Web', 'Móvil'];
  apps = [
    { name: 'Nombre de tu app', type: 'Móvil', image: '/images/app-0.webp' },
    { name: 'Nombre de tu app', type: 'Web', image: '/images/app-1.webp' },
    { name: 'Nombre de tu app', type: 'Móvil', image: '/images/app-2.webp' },
  ];
  get filteredApps() {
    return this.apps.filter((a) => this.filter === 'Todas' || a.type === this.filter);
  }
}
