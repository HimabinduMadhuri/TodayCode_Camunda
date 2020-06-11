import { Global } from './../../global';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical-cases',
  templateUrl: './historical-cases.component.html',
  styleUrls: ['./historical-cases.component.css']
})
export class HistoricalCasesComponent implements OnInit {
  allHistory:any;
 

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  this.getHistory();
  }

  getHistory(){
    if(Global.task)
    this.taskService.getHistory(Global.task.processInstanceId).subscribe(
     (data) => this.allHistory = data
     );
   }
   
}
