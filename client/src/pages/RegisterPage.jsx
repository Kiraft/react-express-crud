import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm();
    const {signup, isAuthenticated, errors:registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if (isAuthenticated) navigate("/tasks");
    },[isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
	    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
                registerErrors.map((error,i)=>(
                    <div className="bg-red-500 p-2 text-white" key={i}>
                        {error}
                    </div>
                ))
            }
            <h1 className="text-3xl font-bold my-2">Registro</h1>
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Usuario"
                ></input>
                {errors.username && (
                    <p className="text-red-500">Usuario es requerido</p>
                )}
                <input type="email" {...register("email", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                ></input>
                {errors.email && (
                    <p className="text-red-500">Email es requerido</p>
                )}
                <input type="password" {...register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Contraseña"
                ></input>
                {errors.password && (
                    <p className="text-red-500">Contraseña es requerido</p>
                )}
                <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
                >
                    Register
                </button>
            </form>
            <p className="flex gap-x-2 justify-between">
                    Ya tienes una cuenta?{""}
                    <Link to="/login" className="text-sky-500">
                    Iniciar Sesion
                    </Link>
            </p>
        </div>
        </div>
    );
}
export default RegisterPage;