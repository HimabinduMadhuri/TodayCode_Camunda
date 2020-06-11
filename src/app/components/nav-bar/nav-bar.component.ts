import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  allProfiles:any;
  profileGroups:any;


  constructor( private taskService:TaskService) { }
  @ViewChild(CreateTaskComponent,{static:false}) createTask:CreateTaskComponent;

  ngOnInit() { 
    this.getProfiles();
  }
  getProfiles(){
    this.taskService.getProfiles().subscribe(
      (data) => {
        this.allProfiles = data
        this.getProfileGroups();
     });
   }
    
   getProfileGroups(){
    this.taskService.getProfileGroups(this.allProfiles.id).subscribe(
     (data) => {
      this.profileGroups = data;
      if(this.profileGroups && this.profileGroups.groups)
      this.profileGroups= this.profileGroups.groups.map((obj) => obj.name);;
     });
   }

}
