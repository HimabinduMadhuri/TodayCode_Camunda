import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-my-group-tasks',
  templateUrl: './my-group-tasks.component.html',
  styleUrls: ['./my-group-tasks.component.css']
})
export class MyGroupTasksComponent implements OnInit {
  groupTasks:any;

  

  constructor(private taskService:TaskService) { 

  }



  ngOnInit() {
    this.getGroupTasks();
    Global.reset();
  }

  showDateInRedColor(date){
    if(date){
    let temp = date.split('-');
    let givenDate = new Date(this.getInt(temp[0]),this.getInt(temp[1])-1,this.getInt(temp[2]));
    givenDate.setHours(0,0,0,0);
    let curDate = new Date();
    curDate.setHours(0,0,0,0);
    if(Number(curDate)>Number(givenDate))
    return true;
  }
    return false;
  }

  getInt(str){
    return parseInt(str);
  }
 
  getGroupTasks(){
    this.taskService.getGroupTasks().subscribe(
     (data) => this.groupTasks =data
     );
   }
   

   
}
