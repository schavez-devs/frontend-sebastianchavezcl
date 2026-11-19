import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './components/common/header/header';
import { Footer } from './components/common/footer/footer';
@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly router = inject(Router);
}
