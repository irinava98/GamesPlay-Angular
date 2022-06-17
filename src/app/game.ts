import { Categories } from './categories';

export class Game{
    constructor(
        public title:string,
        public category:Categories,
        public gameLink:string,
        public imageUrl?:string,
        public summary?:string,
        public likes?:number,
        public id?:number,
       
       
        ) {
    }
    
}