/*import { useAuth } from "../context/AuthContext";
function TasksPage(){
    const {user}=useAuth()
    console.log(user)
    return(
        <div>TasksPage</div>
    )
}*/
import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";


function TasksPage(){
    const {getTasks,tasks}=useTasks();

    useEffect(()=>{
        getTasks();
    },[])
    if (tasks.length ==0)return(<h1>No tareas</h1>);
    return(
    <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {tasks.map((task)=>(
            <TaskCard task={task} key={task._id}></TaskCard>
        ))}
        </div>
    </div>
    );
}


export default TasksPage;
