import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  template: `
    <div class="page-content">
      <div class="title-section">
        <h2>Account</h2>
      </div>
      <div class="content-section">
        <p>
          profile settings (e.g. change pfp, password, email, etc., + option to
          log out, maybe?)
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .page-content {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      .title-section {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
      }

      h2 {
        font-size: 3rem;
        font-weight: 700;
      }

      .content-section {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
})
export class AccountComponent {}
