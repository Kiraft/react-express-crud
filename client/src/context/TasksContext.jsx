import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTaskRequest, updateTasksRequest, getTasksRequest } from "../api/tasks";
import { deleteTasksRequest } from "../api/tasks";


const TaskContext =createContext();

export const useTasks=()=>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("useTasks debe ser usado dentro de TaskProvider");
    }

    return context;
}

export function TaskProvider({children}){
    const[tasks,setTasks]=useState([]);

    const getTasks =async ()=>{
        try {
            const res=await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const createTask = async (task)=>{
        const res=await createTasksRequest(task);
        console.log(res);
    }
    const deleteTask =async(id)=>{
        try {
            const res=await deleteTasksRequest(id);
            if(res.status == 204)setTasks(tasks.filter(task=>task._id!=id))
        } catch (error) {
            console.log(error)
        }
    }

    const getTask =async(id)=>{
        try {
            const res=await getTaskRequest(id)
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateTask =async (id,task)=>{
        try {
            await updateTasksRequest(id,task);
        } catch (error) {
            console.error(error);
        }
    }
    


    return(
        <TaskContext.Provider 
        value={{
            tasks,
            createTask,
            deleteTask,
            getTasks,
            getTask,
            updateTask,
        }}
        >
        {children}
        </TaskContext.Provider>
    );
}
