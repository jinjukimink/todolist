//list에 대한 접근을 해야 함

import {useSetRecoilState } from "recoil";
import { IToDo,toDoState } from "./atoms";

function DeleteToDo({id}:IToDo){
    //const setTodos=useRecoilState(toDoState);
    //const array = useRecoilValue(toDoSelector);//toDoSelector는 각기 다른 세가지 배열들을 리턴하고 있음[배열1,배열2,배열3];
    const setToDos=useSetRecoilState(toDoState);

    //const setArray = useRecoilState(toDoSelector);
    const onClick=()=>{
        setToDos((prevArray:IToDo[])=>{
            const targetIndex = prevArray.findIndex(item => item.id ===id);
            return [...prevArray.slice(0,targetIndex),...prevArray.slice(targetIndex+1)];
       })
    }
    return(
        <button onClick={onClick}>Delete</button>
    );
}
export default DeleteToDo;