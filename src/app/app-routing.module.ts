import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LocatorComponent } from './components/assignment4/locator/locator.component';
import { Assignment5Component } from './components/assignment5/assignment5.component';

const routes: Routes = [
  {
    path: 'assignment1',
    component: CommentsComponent,
  },
  {
    path: 'assignment3',
    component: CalculatorComponent,
  },
  {
    path: 'assignment4',
    component: LocatorComponent,
  },
  {
    path: 'assignment5',
    component: Assignment5Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
