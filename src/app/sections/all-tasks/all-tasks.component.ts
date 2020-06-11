import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {


  constructor(private taskService:TaskService) { }
  
  allTasks:any;

  ngOnInit() {
    Global.reset();
    this.getAllTasks();
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
    (data) => this.allTasks = data
    );
  }
  


}
