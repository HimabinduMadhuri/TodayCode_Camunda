import { SortPriorityPipe } from './../../sort.priority';
import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
})
export class MyTasksComponent implements OnInit {

  constructor(private taskService:TaskService , private  router:Router) { 

  }

  allTasks:any;

  ngOnInit() {
    this.getAllTasks();
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

  getAllTasks(){
    this.taskService.getAllTasks().subscribe(
     (data) => {
      this.allTasks =data;
     }
     );
   }
   
   
}

