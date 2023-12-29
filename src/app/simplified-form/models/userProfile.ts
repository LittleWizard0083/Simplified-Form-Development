export class UserProfile {
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public password:string,
        public userRole:string
    ){}
}