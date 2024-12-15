import {useForm} from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function TasksFormPage(){
    const navigate = useNavigate()
    const params =useParams();
    useEffect(()=>{
        async function loadTask() {
            if(params.id){
                const task= await getTask(params.id);
                console.log(task)
                setValue('title',task.title)
                setValue('description',task.description)
                setValue("date",dayjs(task.date).utc().format('YYYY-MM-DD'))
            }
        }
        loadTask()
    },[])
    const {register,handleSubmit,setValue}=useForm();
    const {createTask,getTask,updateTask}=useTasks();

    const onSubmit=handleSubmit((data)=>{
        if(params.id){
            updateTask(params.id,data)
        }else{
            createTask(data);
        }
        navigate('/tasks')
    })
    


    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Titulo</label>
                <input 
                type="text" 
                placeholder="Title"
                {...register("title",{required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                autoFocus
                ></input>
                
                <label htmlFor="description">Descripcion</label>
                <textarea 
                rows="3" 
                placeholder="Description"
                {... register("description",{required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                ></textarea>
                <label htmlFor="date">Fecha</label>
                <input type="date" {... register("date",{required:true})}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"></input>
                <button className="bg-indigo-500 px-3 py-2 rounded-md">
                    Guardar
                </button>
            </form>
        </div>
        </div>        
    );
}

export default TasksFormPage