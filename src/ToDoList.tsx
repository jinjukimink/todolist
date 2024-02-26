import React, { useState } from "react";
import {Form, useForm} from "react-hook-form";

/*function ToDoList(){
    const [toDo,setToDo]=useState("");
    const [toDoError,setToDoError]=useState("");
    const onChange=(event:React.FormEvent<HTMLInputElement>)=>{
        const {currentTarget: {value},
         }=event;
         setToDoError("");
         setToDo(value);
         
    }
    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(toDo);
        if(toDo.length<10){
            return setToDoError("to do should be longer")
        }
        console.log("submit");
    } 

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={toDo} onChange={onChange} placeholder="write a to do"/>
                <button>Add</button>
                {toDoError!==""?toDoError:null}
            </form> 
        </div>
    );
}*/

function ToDoList(){

    const { register,handleSubmit ,formState} = useForm();
    //console.log(register("Email"));//toDo라는 객체생성
    const onValid=(data:any)=>{
        //console.log(data);
    }
    // console.log(watch());
    console.log(formState.errors);//심지어 에러의 종류도 알려줌..

    return <div>
        <form style={{display:"flex", flexDirection: "column"}}
         onSubmit={handleSubmit(onValid)}>
            <input {...register("Email",{required:true})} placeholder="Email"/>
            <input {...register("firstName",{required:true})} placeholder="firstName"/>
            <input {...register("lastName",{ required:true , minLength:{
                value:5,
                message:"Your password is too short",
            } })} placeholder="lastName"/>
            <input {...register("userName",{required:true})} placeholder="userName"/>
            <input {...register("password",{required:"password is required", minLength:5})} placeholder="password"/>
            <input {...register("password_confirmation",{required:true, minLength:5 })} placeholder="password_confirmation"/>
            <button>Add</button>
        </form>
    </div>
}
export default ToDoList;