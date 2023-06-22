import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { redirectGuard } from '@guards/redirect.guard';
import { authGuard } from '@guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'board',
    canActivate: [authGuard],
    component: BoardComponent,
    title: 'ToDo Board'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
