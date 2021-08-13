import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/movie-list', pathMatch:'full'},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-list', component: UserListComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: 'user-edit/:id', component: UserEditComponent},
  { path: 'user-detail/:id', component: UserDetailComponent},
  { path: 'movie-list', component: MovieListComponent},
  { path: 'movie-create', component: MovieCreateComponent},
  { path: 'movie-edit/:id', component: MovieEditComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent},
  { path: 'actor-list', component: ActorListComponent},
  { path: 'credit-list', component: CreditListComponent},
  { path: 'credit-create', component: CreditCreateComponent},
  { path: 'credit-edit/:id', component: CreditEditComponent},
  { path: 'credit-detail/:id', component: CreditDetailComponent},
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
