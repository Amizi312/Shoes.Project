import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import CredModel from "../../../Models/CredModel";
import notify from "../../../Services/NotifServ";

function Login(): JSX.Element {
    const {register, handleSubmit} = useForm<CredModel>()
    const navigate = useNavigate()
    async function send(credentials:CredModel) {
        try {
            await authService.login(credentials)
            notify.successMsg("Welcome Back")
            navigate("/home")
        } catch (error:any) {
            notify.errorMsg(error)
        }
    }
    return (
        <div className="Login">
			<form onSubmit={handleSubmit(send)}>
                <h2>Login</h2>

                <label>email:</label> 
                <input type="email" {...register("email")}/>

                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
