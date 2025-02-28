import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// any properties in this class are considered a reactive state;
// when their values change, the component is re-rendered

@Component({
  selector: 'app-root', // the name of the component, used in the HTML (<app-root></app-root>)
  standalone: true, // this component does not need to be declared in a parent component
  imports: [RouterOutlet, CommonModule], // the components that are used in this component
  // template is what gets rendered in the browser
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
  title = 'MIT Water Tour';
}
