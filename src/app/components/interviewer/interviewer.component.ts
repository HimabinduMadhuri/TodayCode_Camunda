import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.css']
})
export class InterviewerComponent implements OnInit {

  task:any;
angForm:FormGroup;
  constructor(private fb: FormBuilder, private taskservice: TaskService,private router:Router) { 
   this.angForm = Global.interviewForm;
}

  ngOnInit() {
    this.task = history.state.task;
    Global.task = this.task
  }

  saveOne(){
    var formobj = this.setValue( this.angForm.value);
    this.taskservice.save(formobj,this.task.id)
      .subscribe(res => {
      alert("SuccessFully Saved Interview Feedback One");
      this.gotoMyTask();
      }, error => {
        console.log('Add business failure');
      });
    }

  saveTwo(){
    var formobj = this.setValueTwo( this.angForm.value);
    this.taskservice.save(formobj,this.task.id)
      .subscribe(res => {
      alert("SuccessFully Saved Interview Feedback Two");
      this.gotoMyTask();
    }, error => {
        console.log('Add business failure');
      });
  }
  
  completeOne(){
    var formobj = this.setValue( this.angForm.value);
    this.taskservice.submitForm(formobj,this.task.id)
      .subscribe(res => {
        alert("SuccessFully Saved interview one Feedback");
        this.gotoMyTask();
      }, error => {
        console.log('Add business failure');
      });
     }


gotoMyTask(){
  Global.reset();
  if(history.state.routeTo)
     this.router.navigate([history.state.routeTo]);
  else
     this.router.navigate(['/my-tasks']);
}
  
    completeTwo(){
      var formobj = this.setValueTwo( this.angForm.value);
      this.angForm = undefined
      this.taskservice.submitForm(formobj,this.task.id)
        .subscribe(res => {
          alert("SuccessFully Saved interview Two Feedback");
          this.gotoMyTask();
        }, error => {
          console.log('Add business failure');
        });
      }


  setValue(angForm):any{
  var variable:any=  {
    "int1Feedback":{"type":"String","value":angForm.feedback,"valueInfo":{}},
    "int1Result":{"type":"String","value":angForm.result,"valueInfo":{}}
  }
    return variable;
    }

    setValueTwo(angForm){
      var variables={
      "int2Result":{"type":"Boolean","value":angForm.result,"valueInfo":{}},
      "Int2Feedback":{"type":"String","value":angForm.feedback,"valueInfo":{}}}
      return variables;
    }


}
