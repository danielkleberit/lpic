import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CheckComponent } from './check/check.component';
import { EinzelfrageComponent } from './einzelfrage/einzelfrage.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'check', component: CheckComponent },
  { path:'einzel',component:EinzelfrageComponent},
  { path: 'exam', component:ExamComponent},
  {path:'result',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
