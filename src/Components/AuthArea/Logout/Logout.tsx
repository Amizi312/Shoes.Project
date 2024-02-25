import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";
import notify from "../../../Services/NotifServ";

function Logout(): JSX.Element {
   
    const navigate = useNavigate()

    useEffect(()=>{
        authService.logOut()
        notify.successMsg("Bye Bye")
        navigate("/login")
    },[])

    return null
}

export default Logout;
