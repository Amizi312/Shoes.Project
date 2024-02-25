import axios from "axios";
import { AuthStore } from "../redux/AuthState";

class InterServ{
    public createInterceptor():void{
        axios.interceptors.request.use(request => {

            if (AuthStore.getState().token){
                request.headers.Authorization = "Bearer " + AuthStore.getState().token
            }
            return request

                })

    }
}

const interceptorService = new InterServ()
export default interceptorService