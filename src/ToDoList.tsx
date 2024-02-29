import {useForm} from "react-hook-form";


interface IForm{
    toDo:string;

}
function ToDoList(){
 
const{register,handleSubmit,setValue } = useForm<IForm>();

const onSubmit=(data:IForm)=>{
    console.log("add to do",data.toDo);
    setValue("toDo","");
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("toDo",{
                    required:"Please write to do.",   
                })} placeholder="write a to do"/>
                <button>Add</button> 
            </form> 
        </div>
    );
}
export default ToDoList;

/*interface IFrom{
    Email:"string"; 
    firstName:"string";
    lastName:"string";
    userName:"string";
    password:"string";
    password_confirmation:"string";
    extraError?:string;
}

function ToDoList(){

    const { register,handleSubmit ,formState:{errors}, setError} = useForm<IFrom>({
        defaultValues:{
        }
    });

    const onValid=(data:any)=>{//데이터가 유효할 때만 받는 함수
        //console.log(data);
        if(data.password !== data.password_confirmation){
            setError("password_confirmation",{message:"Password are not the same"},{shouldFocus:true})//password_confimation에 오류가 있다면, 커서가 그쪽에 가게 한다.
        }
        setError("extraError",{message:"Server offline"});
    };
    console.log(errors);//심지어 에러의 종류도 알려줌.. 


    return <div>  
        <form style={{display:"flex", flexDirection: "column"}}
         onSubmit={handleSubmit(onValid)}>

            <input {...register("Email",{ required:"Email is required", pattern:
                {value:/^[A-Za-z0-9._%+-]+@naver\.com$/,
                message:"Only naver.com emails allowed!!"}
                })} placeholder="Email"/>
            <span>{errors.Email?.message}</span>

            <input {...register("firstName",{required:"firstName is required",validate:{
                noJinju: (value)=> value.includes("jinju")?"no jinjus allowed":true,
                noNicos: (value)=> value.includes("nico")?"no nico allowed":true,
            }
            })} placeholder="firstName"/>
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
            <span>{errors?.extraError?.message}</span>
        </form>
    </div>
}
export default ToDoList;*/