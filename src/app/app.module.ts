import { SortPipe } from './sort.pipe';
import { SortPriorityPipe } from './sort.priority';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AllTasksComponent } from './sections/all-tasks/all-tasks.component';
import { MyTasksComponent } from './sections/my-tasks/my-tasks.component';
import { MyGroupTasksComponent } from './sections/my-group-tasks/my-group-tasks.component';
import { FindACaseComponent } from './sections/find-a-case/find-a-case.component';
import { HistoricalCasesComponent } from './sections/historical-cases/historical-cases.component';
import { ActiveCasesComponent } from './sections/active-cases/active-cases.component';
import { MyDashboardComponent } from './sections/my-dashboard/my-dashboard.component';
import { HomeComponent } from './sections/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CaseInfoComponent } from './components/case-info/case-info.component';
import { TrailTabsComponent } from './components/trail-tabs/trail-tabs.component';
import { ScheduleInterviewComponent } from './components/schedule-interview/schedule-interview.component';
import { InterviewerComponent } from './components/interviewer/interviewer.component';








@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
     
    SideBarComponent,
    AllTasksComponent,
    MyTasksComponent,
    MyGroupTasksComponent,
    FindACaseComponent,
    HistoricalCasesComponent,
    ActiveCasesComponent,
    MyDashboardComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CreateTaskComponent,
    CaseInfoComponent,
    TrailTabsComponent,
    ScheduleInterviewComponent,
    InterviewerComponent,
    HistoricalCasesComponent,
    SortPipe,
    SortPriorityPipe
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
