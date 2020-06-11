
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-trail-tabs',
  templateUrl: './trail-tabs.component.html',
  styleUrls: ['./trail-tabs.component.css']
})
export class TrailTabsComponent implements OnInit {

  allTrails:any;
  task:any;
  data:any;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.task=history.state.task;
  //  alert(this.processInstanceId);
  this.getTrails();
  }
   

  getTrails(){
    return this .taskService.getAuditTrails(this.task.processInstanceId).subscribe(
      (data) =>{
        this.allTrails = data
      } 
      );
      

}
}
