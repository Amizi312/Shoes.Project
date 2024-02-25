import { useEffect, useState } from "react";
import "./AuthMenu.css";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { AuthStore } from "../../../redux/AuthState";

function AuthMenu(): JSX.Element {

    const [user,setUser] = useState<UserModel>()
    useEffect(()=>{
        setUser(AuthStore.getState().user) 
        const unsubscribe = AuthStore.subscribe(()=>{
            setUser(AuthStore.getState().user)
            console.log(user) 
        })
        return ()=> unsubscribe()
    },[])

    return (
        <div className="AuthMenu">
			{!user &&
             <>
                <span>Hello Guest | </span>
                <NavLink to="/login">Login</NavLink>
                <span> | </span>
                <NavLink to="/register">Register</NavLink>
            </>
            }
            {user && 
            <>
                <span> Hello {user.firstName} | </span>
                <NavLink to="/logout">Logout</NavLink>
            </>}
        </div>
    );
}

export default AuthMenu;
