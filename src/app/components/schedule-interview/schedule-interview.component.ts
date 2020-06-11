import { Global } from 'src/app/global';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { debugOutputAstAsTypeScript, analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {
  angForm: FormGroup;
  tenantID:string;
  res: any;
  task:any;
  sForm:any;
  constructor(private fb: FormBuilder, private taskservice: TaskService , private router:Router) { 
  this.angForm = Global.scheduleForm;
}


  ngOnInit() {   
    this.task = history.state.task;
    Global.task = this.task;
  }
  onFormSubmit(){
    window.alert("working!");
  }

  saveOne(){
    var formobj = this.setValue( this.angForm.value);
    this.taskservice.save(formobj,this.task.id)
      .subscribe(res => {
      alert("SuccessFully Saved Scheduled interview one");
      this.gotoMyTask();
      }, error => {
        console.log('Add business failure');
      }); 
  }

  saveTwo(){
    var formobj = this.setValueTwo( this.angForm.value);
    this.taskservice.save(formobj,this.task.id)
      .subscribe(res => {
      alert("SuccessFully Saved Scheduled interview Two");
      this.gotoMyTask();
      }, error => {
        console.log('Add business failure');
      });
  }

  completeOne(){
     var formobj = this.setValue( this.angForm.value);
    this.taskservice.submitForm(formobj,this.task.id)
      .subscribe(res => {
        alert("SuccessFully Saved Scheduled interview one");
        this.gotoMyTask();
      }, error => {
        console.log('Add business failure');
      });
 }
    dateChange(){
      let temp = this.angForm.value.interviewerDate.split('-');
      let givenDate = new Date(this.getInt(temp[0]),this.getInt(temp[1])-1,this.getInt(temp[2]));
      givenDate.setHours(0,0,0,0);
      let curDate = new Date();
      curDate.setHours(0,0,0,0);
      if(Number(curDate)<=Number(givenDate))
      document.getElementById('interviewerDate').style.color='black';
      else
      document.getElementById('interviewerDate').style.color='red';
    }
    
    getInt(str){
      return parseInt(str);
    }
    
gotoMyTask(){
  debugger;
  Global.reset();
  if(history.state.routeTo)
  this.router.navigate([history.state.routeTo]);
  else
  this.router.navigate(['/my-tasks']);
}
    completeTwo(){
      var formobj = this.setValueTwo( this.angForm.value);
      this.taskservice.submitForm(formobj,this.task.id)
        .subscribe(res => {
        alert("SuccessFully Saved Scheduled interview Two");
        this.gotoMyTask();
        }, error => {
          console.log('Add business failure');
          debugger;
        });
      }


  setValue(angForm):any{
  var variable:any=  {
        "interviewer1": {
          "type": "String",
          "value": angForm.interviewer,
          "valueInfo": {}
        },
        "candidateName": {
          "type": "String",
          "value": angForm.name,
          "valueInfo": {}
        },
        "candidateInfo": {
          "type": "String",
          "value": angForm.assignee,
          "valueInfo": {}
        },
        "jobDescription": {
          "type": "String",
          "value": angForm.description,
          "valueInfo": {}
        },
        "candidateID": {
          "type": "String",
          "value": angForm.tenantID,
          "valueInfo": {}
        },
        "interview1Date": {
          "type": "String",
          "value": angForm.interviewerDate,
          "valueInfo": {}
        }
    }
    return variable;
    }

    setValueTwo(angForm){
      var variables={"interviewer2":{"type":"String","value":angForm.interviewer,"valueInfo":{}},"int2date":{"type":"String","value":angForm.interviewerDate,"valueInfo":{}}}
      return variables;
    }
}

