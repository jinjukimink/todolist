//할일 목록을 보여줌
//import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";
import { Categories } from "./atoms";
import DeleteToDo from "./DeleteToDo";


function ToDo({text,category,id }:IToDo){//ToDo의 인자로 텍스트를 받아오면 그걸 이용해서 렌더링할거임
    const setToDos = useSetRecoilState(toDoState);
    const onClick=(newCategory:IToDo["category"])=>{
        console.log("i want to go to",newCategory);
        setToDos((oldToDos)=>{
            const targetIndex=oldToDos.findIndex(toDo => toDo.id===id);//findIndex(조건식)//바꾸자하는 요소의 인덱스 찾기
            const newToDo = {text,id, category:newCategory};//새로운 객체 생성//얘로 대체해 줄거임
            return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)];
        }) 
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING &&<button onClick={()=>onClick(Categories.DOING)}>Doing</button>} 
            {category !== Categories.TO_DO &&<button  onClick={()=>onClick(Categories.TO_DO)}>ToDo</button>}
            {category !== Categories.DONE &&<button  onClick={()=>onClick(Categories.DONE)}>Done</button>}
            <DeleteToDo id={id} category={category} text={text}/>
        </li> 
    );
}
export default ToDo;