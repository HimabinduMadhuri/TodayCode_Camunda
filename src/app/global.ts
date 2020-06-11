import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export class Global {

    public static task:any;
    public static  scheduleForm: FormGroup;
    public static  interviewForm: FormGroup;
    public  static fbr:FormBuilder;  

 static reset(){
     if(this.fbr){
    this.scheduleForm = this.fbr.group({
        name: ['', Validators.required],
        assignee: ['', Validators.required],
        tenantID: ['', Validators.required],
        description: ['', Validators.required],
        interviewerDate:['' , Validators.required],
        interviewer:['' , Validators.required]
      });
      this.interviewForm = this.fbr.group({
        feedback: ['', Validators.required],
        result: ['', Validators.required]
      });
    }
      this.task = undefined;
}

}