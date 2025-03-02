import { Component } from '@angular/core';

@Component({
  selector: 'app-rankings',
  standalone: true,
  template: `
    <div class="page-content">
      <div class="title-section">
        <h2>Rankings</h2>
      </div>
      <div class="content-section">
        <p>
          fountains ranked by avg rating among friends, with option to toggle
          between viewing aggregate rankings vs. your own rankings also, want
          leaderboard of friends, ranked by number of fountains rated (option to
          toggle between number rated vs. number reviewed)
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
export class RankingsComponent {}
