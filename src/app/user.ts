import { Roles } from './roles';

export class User{

    constructor(
        public username:string,
        public email:string,
        public password:string,
        public role:Roles,
        public id?:number,
    )
    {

    }
    
}