import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <div
        class="content"
        [style.transform]="'translateY(' + scrollPosition + 'px)'"
      >
        <div class="hero" [style.opacity]="getOpacity(0)">
          <h1 [@fadeIn]>Massive Intake of Tap</h1>
          <p [@slideIn]>
            Compete against your friends in rating and reviewing water fountains
            around campus!
          </p>
          <div class="scroll-indicator">↓</div>
        </div>

        <div class="content-sections">
          <section
            class="content-section left-of-center"
            [style.opacity]="getOpacity(1)"
          >
            <h2>How It Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section
            class="content-section right-of-center"
            [style.opacity]="getOpacity(2)"
          >
            <h2>Find Fountains</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section
            class="content-section left-of-center"
            [style.opacity]="getOpacity(3)"
          >
            <h2>Rate & Review</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        height: 100vh;
        overflow: hidden;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
      }

      .content {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }

      .hero {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem;
      }

      h1 {
        font-size: 5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        letter-spacing: -2px;
        text-align: center;
      }

      .hero p {
        font-size: 1.5rem;
        opacity: 0.8;
        max-width: 600px;
        line-height: 1.6;
        text-align: center;
      }

      .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        font-size: 2rem;
        animation: bounce 2s infinite;
        opacity: 0.5;
      }

      .content-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }

      .content-section.left-of-center {
        margin-right: 20%;
      }

      .content-section.right-of-center {
        margin-left: 20%;
      }

      .content-section h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
      }

      .content-section p {
        font-size: 1.2rem;
        line-height: 1.6;
      }

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-20px);
        }
        60% {
          transform: translateY(-10px);
        }
      }
    `,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '1s 0.5s ease',
          style({ opacity: 0.8, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  scrollPosition = 0;
  Math = Math; // Make Math available in template

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent) {
    // Adjust scroll speed and direction
    this.scrollPosition -= event.deltaY * 0.5;

    // Limit scrolling range (adjust these values as needed)
    this.scrollPosition = Math.min(0, Math.max(-2000, this.scrollPosition));

    // Prevent default scrolling
    event.preventDefault();
  }

  getOpacity(sectionIndex: number): number {
    const sectionPosition = sectionIndex * window.innerHeight;
    const distance = Math.abs(this.scrollPosition + sectionPosition);
    return Math.max(0, Math.min(1, 1 - distance / 500));
  }
}
