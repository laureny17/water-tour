import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <header class="header">
      <h1>MIT Water Tour</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Buildings</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {
  title = "MIT Water Tour";
}
