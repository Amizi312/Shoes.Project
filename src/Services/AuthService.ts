import axios from "axios"
import UserModel from "../Models/UserModel"
import appConf from "../Utils/Conf"
import { AuthActionType, AuthStore } from "../redux/AuthState"
import CredModel from "../Models/CredModel"

class AuthService{

    public async register(user:UserModel):Promise<void>{
        const response = await axios.post<string>(appConf.registerUrl, user)
        const token = response.data
        AuthStore.dispatch({type:AuthActionType.Register,payload:token})
    }

    public async login(creds:CredModel):Promise<void>{
        const response = await axios.post<string>(appConf.loginUrl, creds)
        const token = response.data
        AuthStore.dispatch({type:AuthActionType.Login,payload:token})
    
    }
    public logOut():void{
        AuthStore.dispatch({type:AuthActionType.LogOut})
    }
}

const authService = new AuthService()

export default authService