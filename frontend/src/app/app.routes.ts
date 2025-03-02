import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { SignInComponent } from './components/signin.component';
import { AccountComponent } from './components/account.component';
import { ProgressComponent } from './components/progress.component';
import { RankingsComponent } from './components/rankings.component';
import { FriendsComponent } from './components/friends.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'account', component: AccountComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'friends', component: FriendsComponent },
];
