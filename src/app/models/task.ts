export class Task {
          
   constructor(
    public id:string,
    public processInstanceId:string,
    public processDefinitionId:string,
    public priority:Number,
    public assigne:string,
    public created:Date,
    public due:string,
    public followUp:string
  ){  }
}
