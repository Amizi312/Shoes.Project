import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {
    const {register, handleSubmit} = useForm<UserModel>()

    const navigate = useNavigate()

    async function send(user:UserModel) {
        try {
            await authService.register(user)
            alert("Welcome!")
            navigate("/home")

        } catch (error:any) {
            alert(error.message)
        }
    }
    return (
        <div className="Register">
				<form onSubmit={handleSubmit(send)}>

<label>First Name:</label>
<input type="text" {...register("firstName")} />

<label>Last Name:</label>
<input type="text" {...register("lastName")} />

<label>email:</label>
<input type="email" {...register("email")} />

<label>Password:</label>
<input type="password" {...register("password")} />

<button>Register</button>

</form>

        </div>
    );
}

export default Register;
