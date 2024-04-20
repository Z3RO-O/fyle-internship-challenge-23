import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { AppPaginationComponent } from './app-pagination/app-pagination.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { AppInputComponent } from './app-input/app-input.component';
import { SkeletonRepoCardComponent } from './skeleton-repo-card/skeleton-repo-card.component';
import { SkeletonUserDetailsComponent } from './skeleton-user-details/skeleton-user-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPaginationComponent,
    UserProfileComponent,
    UserReposComponent,
    RepoCardComponent,
    AppInputComponent,
    SkeletonRepoCardComponent,
    SkeletonUserDetailsComponent,
    UserDetailsComponent,
    PaginationComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
