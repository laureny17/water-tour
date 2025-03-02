import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  template: `
    <div class="page-content">
      <div class="title-section">
        <h2>Progress</h2>
      </div>
      <div class="content-section">
        <p>
          show user progress in detail; more in detail than in rankings, list
          specific fountains rated and reviewed in each building (+ date
          reviewed, and what the review and ratings were?), with '???'s for
          undiscovered fountains... display a little like game
          achievement/progress UI! should also implement achievements/badges!
          also maybe show user stats, like how stingy you are with scores, with
          your distribution of ratings looks like, etc.
        </p>
      </div>
    </div>
  `,
})
export class ProgressComponent {}
