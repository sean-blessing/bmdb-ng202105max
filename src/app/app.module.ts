import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { AppComponent } from './app.component';
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
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MovieListComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    ActorListComponent,
    CreditListComponent,
    CreditCreateComponent,
    CreditEditComponent,
    CreditDetailComponent,
    UserListComponent,
    UserLoginComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    ActorCreateComponent,
    ActorEditComponent,
    ActorDetailComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
