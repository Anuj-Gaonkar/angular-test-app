import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    HomeComponent,
    HeaderComponent,
    TopHeaderComponent,
    ContainerComponent
  ],
  templateUrl: './app.component.html',
  // template: `
  // <main>
  //     <header class="brand-name">
  //       <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
  //     </header>
  //     <section class="content">
  //       <app-home></app-home>
  //     </section>
  //   </main>
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoapp';
}
