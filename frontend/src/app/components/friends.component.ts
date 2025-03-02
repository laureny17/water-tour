import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  standalone: true,
  template: `
    <div class="page-content">
      <div class="title-section">
        <h2>Friends</h2>
      </div>

      <div class="content-section">
        <!-- Friend Requests Section -->
        <section class="section">
          <h3>Friend Requests</h3>
          <p class="todo">TODO: Implement friend request system</p>
          <ul class="feature-list">
            <li>Accept/decline incoming requests</li>
            <li>Send requests to other users</li>
            <li>Search for users by username</li>
          </ul>
        </section>

        <!-- Friends List Section -->
        <section class="section">
          <h3>Your Friends</h3>
          <p class="todo">TODO: Implement friends list with profiles</p>
          <ul class="feature-list">
            <li>Click to view friend's profile</li>
            <li>See their progress and achievements</li>
            <li>
              View their discovered fountains (only ones you've also found)
            </li>
            <li>Compare stats and rankings</li>
          </ul>
        </section>

        <!-- Privacy Notes -->
        <section class="section">
          <h3>Privacy Features to Implement:</h3>
          <ul class="feature-list">
            <li>Hidden fountains until discovered by both users</li>
            <li>Option to hide profile/progress from non-friends</li>
            <li>Ability to remove friends</li>
          </ul>
        </section>
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
        margin-bottom: 2 rem;
      }

      h2 {
        font-size: 3rem;
        font-weight: 700;
      }

      .content-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .section {
        margin-bottom: 2rem;
        max-width: 600px;
        width: 100%;
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .todo {
        color: #666;
        font-style: italic;
        margin-bottom: 1rem;
      }

      .feature-list {
        text-align: left;
        list-style-type: none;
        padding: 0;
      }

      .feature-list li {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
      }

      .feature-list li:before {
        content: '→';
        position: absolute;
        left: 0;
        color: #666;
      }
    `,
  ],
})
export class FriendsComponent {}
