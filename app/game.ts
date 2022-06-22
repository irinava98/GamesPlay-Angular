import { Categories } from './categories';
import { Comment } from './comment';

export class Game{
    constructor(
        public title:string,
        public category:Categories,
        public gameLink:string,
        public imageUrl?:string,
        public summary?:string,
        public likes?:number,
        public comments?:Comment[],
        public id?:number
    
       
       
        ) {
    }
    
}