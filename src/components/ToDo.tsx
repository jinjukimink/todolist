//할일 목록을 보여줌
//import { useRecoilValue } from "recoil";
import { IToDo } from "./atoms";



function ToDo({text}:IToDo){//ToDo의 인자로 텍스트를 받아오면 그걸 이용해서 렌더링할거임
    return (
        <li>
            <span>{text}</span>
            <button>ToDo</button>
            <button>Doing</button>
            <button>Done</button>
        </li> 
    );
}


export default ToDo;