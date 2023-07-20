import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandpageComponent } from './pages/landpage/landpage.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MyFriendsComponent} from "./pages/profile/my-friends/my-friends.component";
import {MyGameRoomsComponent} from "./pages/profile/my-game-rooms/my-game-rooms.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'welcome', component: LandpageComponent },
  {path: 'friends', component: MyFriendsComponent},
  {path: 'gamerooms', component: MyGameRoomsComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
