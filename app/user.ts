import { Roles } from './roles';
import { Comment } from './comment';

export class User{

    constructor(
        public username:string,
        public email:string,
        public password:string,
        public role:Roles,
        public id?:number,
        public comments?:Comment[]
    )
    {

    }
    
}