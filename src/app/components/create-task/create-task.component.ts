import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  angForm: FormGroup;
  tenantID:string;
  res: any;
  constructor(private fb: FormBuilder, private taskservice: TaskService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      assignee: ['', Validators.required],
      tenantID: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  

  onFormSubmit(){
    window.alert("working!");
  }

  createTask() {
    console.log(this.angForm.value);
    var formobj = this.angForm.value;
    this.angForm = undefined
    this.taskservice.addTask(formobj)
      .subscribe(res => {
       this.getId(res);
      }, error => {
        console.log('Add business failure');
      });
  }
  getId(res){
    console.log(res);
    this.angForm = undefined;
    alert('U have successfully created processInstance with Id: ' +res.id);     
  }

}
