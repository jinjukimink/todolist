import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { Categories, categoryState, toDoSelector} from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";
//import { Categories } //from "./atoms";

function ToDoList(){

    //const toDos = useRecoilValue(toDoState);
    const array = useRecoilValue(toDoSelector);//toDoSelector는 각기 다른 세가지 배열들을 리턴하고 있음[배열1,배열2,배열3];
    const [category,setCategory] = useRecoilState(categoryState);
   
    const onInput=(event:React.FormEvent<HTMLSelectElement>)=>{
        console.log(event.currentTarget.value);
        setCategory(event.currentTarget.value as any);
    }
    //console.log(category);
    console.log(array);
    
    return (
        <div>
            <h1>To Dos</h1>
            <hr/> 
            <select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo/>
            {array?.map(item=> <ToDo key={item.id} {...item}/>)}
        </div> 
    );
}
export default ToDoList;

