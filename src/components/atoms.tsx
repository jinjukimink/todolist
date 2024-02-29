import { atom } from "recoil";

export interface IToDo{
    text:string;
    category:"DONE"|"DOING"|"TO_DO";//저 세가지 스트링만 받을 수 있다
    id:number;
} 

export const toDoState =atom<IToDo[]>({//디폴트는 빈 배열
    key:"toDo",
    default:[],
})