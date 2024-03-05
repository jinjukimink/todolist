//할일 목록을 추가함
import { useForm } from "react-hook-form";
import {useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm{
    toDo:string;
}

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);//atoms에 있는 배열을 여기로 가져옴
    const {register,handleSubmit,setValue}=useForm<IForm>();
    const selectedCategory = useRecoilValue(categoryState);

    const onSubmit=({toDo}: IForm )=>{//제출 성공하면
        setToDos(oldToDos =>[{text:toDo, category:selectedCategory, id:Date.now()}, ...oldToDos]);///{}객체를 배열안에서 계속 추가할거임
        setValue("toDo","");//toDo 객체를 빈 스트링으로 받아라

    };//한번 제출되면 toDoState가 바뀌는 거임. 리코일로 컨트롤했으니깐?
    //애초에 toDoState의 인터페이스가 IToDo[]였음.그러니간 배열 안의 요소를 추가해줄 때 IToDo에 맞는 객채로 써준거임. 아니면 에러남.

    return(  
     <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("toDo",{
                    required:"Please write to do.",   
                })} placeholder="write a to do"/>
                <button>Add</button> 
            </form> 
    );

}

export default CreateToDo;