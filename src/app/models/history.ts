export class History{




    constructor(
        public processDefinitionName :string,
        public startTime:string,
        public endTime:string,
        public startUserId:string,
        public state:string,
        public processInstanceId:string
    ){

    }
}