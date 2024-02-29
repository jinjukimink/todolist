import React from "react";
import {useForm} from "react-hook-form";

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
                <input value={toDo} onChange={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onChange} placeholder="write a to do"/>
                <button>Add</button>
                {toDoError!==""?toDoError:null}
            </form> 
        </div>
    );
}*/
interface IFrom{
    Email:"string";
    firstName:"string";
    lastName:"string";
    userName:"string";
    password:"string";
    password_confirmation:"string";
}

function ToDoList(){

    const { register,handleSubmit ,formState:{errors}} = useForm<IFrom>({
        defaultValues:{
    
            
        }
    });

    const onValid=(data:any)=>{
        //console.log(data);
    }
    // console.log(watch());
    console.log(errors);//심지어 에러의 종류도 알려줌..


    return <div>  
        <form style={{display:"flex", flexDirection: "column"}}
         onSubmit={handleSubmit(onValid)}>

            <input {...register("Email",{ required:"Email is required", pattern:
                {value:/^[A-Za-z0-9._%+-]+@naver\.com$/,
                message:"Only naver.com emails allowed!!"}
                })} placeholder="Email"/>
            <span>{errors.Email?.message}</span>

            <input {...register("firstName",{required:"firstName is required"})} placeholder="firstName"/>
            <span>{errors.firstName?.message }</span>

            <input {...register("lastName",{ required:"lastName is required" , minLength:{
                value:5,
                message:"Your lastName is too short",
            } })} placeholder="lastName"/>
            <span>{errors.lastName?.message }</span>
            <input {...register("userName",{required:"userName is requried"})} placeholder="userName"/>
            <span>{errors.userName?.message }</span>

            <input {...register("password",{required:"password is required", minLength:{
                value:5,
                message:"your password is too short"
            }})} placeholder="password"/>
            <span>{errors.password?.message }</span>

            <input {...register("password_confirmation",{required:true, minLength:5 })} placeholder="password_confirmation"/>
            <span>{errors.password_confirmation?.message }</span>
            <button>Add</button>
        </form>
    </div>
}
export default ToDoList;