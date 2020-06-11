import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  createuri = 'http://localhost:8080/engine-rest/process-definition/key/InterviewTracker/start';

  constructor(private http: HttpClient) { }


  sideBarUri = "http://localhost:8080/camunda/api/engine/engine/default/filter?maxResults=50&firstResult=0&itemCount=false&resourceType=Task";
  
  groupTasksUri = "http://localhost:8080/engine-rest/task?processDefinitionKeyIn=InterviewTracker ";

  submitFormUrl="http://localhost:8080/camunda/api/engine/engine/default/task/";
  updateFormUrl="";

  completeUri="http://localhost:8080/engine-rest/task/";

    userUri = "http://localhost:8080/engine-rest/task?processDefinitionKeyIn=InterviewTracker";
    profileUri = "http://localhost:8080/engine-rest/user/demo/profile" ;
    profileGroupsUri = "http://localhost:8080/engine-rest/identity/groups?userId=";
    historyUri = "http://localhost:8080/engine-rest/history/task?processInstanceId=";
    caseInfoUri = "http://localhost:8080/engine-rest/process-instance/";
    auditTrailsUri = "http://localhost:8080/engine-rest/history/task?processInstanceId=";
   
     
  

  getAllTasks() {
    return this
           .http
           .get(`${this.userUri}`);
  }

  getSideBarInfo() {
   // return this.http.get(`${this.sideBarUri}`);
  }

  addTask(data) {
    return this.http.post(`${this.createuri}`, data);
  }

  submitForm(data,taskId) {
    return this.http.post(`${this.completeUri+taskId+"/complete"}`, {"variables":data});
  }

  save(data,taskId) {
    return this.http.post(`${this.completeUri+taskId+"/variables"}`, {"modifications":data});
  }

   getGroupTasks(){
     return this.http.get(`${this.groupTasksUri}`);
   }


   getTask(taskId){
    return this.http.get(`${this.submitFormUrl+taskId}`);
  }
  
    getProfiles(){
      return this.http.get(`${this.profileUri}`);
    }

    getProfileGroups(id){
      return this.http.get(`${this.profileGroupsUri+id}`);
    }
     getHistory(processInstanceId){
       return this.http.get(`${this.historyUri+processInstanceId}`);

     }
     getCaseInfo(processInstanceId){
       return this .http.get(`${this.caseInfoUri+processInstanceId+"/variables"}`);
     }
    
     getAuditTrails(processInstanceId){
      return this .http.get(`${this.auditTrailsUri+processInstanceId+"&sortBy=startTime&sortOrder=asc"}`);
    }


}
