import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";

function Logout(): JSX.Element {
   
    const navigate = useNavigate()

    useEffect(()=>{
        authService.logOut()
        alert("Bye Bye")
        navigate("/login")
    },[])

    return null
}

export default Logout;
