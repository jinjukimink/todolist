import { atom ,selector} from "recoil";

export enum Categories{
    "TO_DO" = "TO_DO",//0
    "DOING" = "DOING",//1
    "DONE" = "DONE",//2
}

//type categories="DONE"|"DOING"|"TO_DO";

export interface IToDo{
    text:string;
    category:Categories;//Categories중 하나를 받는다잉
    id:number;
} 

export const toDoState =atom<IToDo[]>({//디폴트는 빈 배열//어쨌든 배열!!!!!
    key:"toDo",
    default:[],
});

export const categoryState=atom<Categories>({
    key:"category",
    default:Categories.TO_DO,
})

export const toDoSelector=selector({
    key:"toDoSelector",
    get: ({get})=>{
        const toDos = get(toDoState);
        const category=get(categoryState);
        
        return toDos.filter(toDo=>toDo.category === category);
    }
})