import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header>
      <nav class="nav-container">
        <a
          class="nav-link"
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >

        <!-- Only show these links if user is logged in -->
        <ng-container *ngIf="isLoggedIn">
          <a class="nav-link" routerLink="/progress" routerLinkActive="active"
            >Progress</a
          >
          <a class="nav-link" routerLink="/rankings" routerLinkActive="active"
            >Rankings</a
          >
          <a class="nav-link" routerLink="/friends" routerLinkActive="active"
            >Friends</a
          >
          <a class="nav-link" routerLink="/account" routerLinkActive="active"
            >Account</a
          >
        </ng-container>

        <!-- Show Sign In if not logged in -->
        <ng-container *ngIf="!isLoggedIn">
          <a class="nav-link" routerLink="/signin" routerLinkActive="active"
            >Sign In</a
          >
        </ng-container>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      header {
        position: fixed;
        width: 100%;
        z-index: 1000;
        padding: 1.5rem;
        background: transparent;
      }

      .nav-container {
        display: flex;
        justify-content: center;
        gap: 3rem;
      }

      .nav-link {
        color: #333;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        transition: all 0.3s ease;
      }

      .nav-link:hover {
        background: rgba(0, 0, 0, 0.05);
        transform: translateY(-2px);
      }

      .active {
        background: rgba(0, 0, 0, 0.05);
      }

      main {
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  isLoggedIn = true; // for testing, will be connected to auth service later
}
