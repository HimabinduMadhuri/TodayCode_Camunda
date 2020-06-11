import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AllTasksComponent } from './sections/all-tasks/all-tasks.component';
import { MyTasksComponent } from './sections/my-tasks/my-tasks.component';
import { MyGroupTasksComponent } from './sections/my-group-tasks/my-group-tasks.component';
import { FindACaseComponent } from './sections/find-a-case/find-a-case.component';
import { HistoricalCasesComponent } from './sections/historical-cases/historical-cases.component';
import { ActiveCasesComponent } from './sections/active-cases/active-cases.component';
import { MyDashboardComponent } from './sections/my-dashboard/my-dashboard.component';
import { CaseInfoComponent } from './components/case-info/case-info.component';
import { TrailTabsComponent } from './components/trail-tabs/trail-tabs.component';
import { InterviewerComponent } from './components/interviewer/interviewer.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'all-tasks',component:AllTasksComponent},
  {path:'my-tasks',component:MyTasksComponent},
  {path:'my-group-tasks',component:MyGroupTasksComponent},
  {path:'find-a-case',component:FindACaseComponent},
  {path:'historical-cases',component:HistoricalCasesComponent},
  {path:'active-cases',component:ActiveCasesComponent},
  {path:'my-dashboard',component:MyDashboardComponent},
  {path:'case-info' , component:CaseInfoComponent},
  {path:'trail-tabs' , component:TrailTabsComponent},
  {path:'interviewer' ,component:InterviewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
