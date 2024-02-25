import { Notyf } from "notyf";

class NotifServ{
    private notif = new Notyf({duration: 10000, position: {x: "center", y:"center"} })
   
    public successMsg(message:string):void {
        this.notif.success(message)
    }

    public errorMsg(err:any):void {
        const message = this.extractErrorMessage(err)
        this.notif.error(message)
    }

    private extractErrorMessage(err:any):string {

        if(typeof err === "string") return err

        if(typeof err.response?.data === "string") return err.response.data

        if(Array.isArray(err.response?.data)) return err.response.data[0]

        if(typeof err.message === "string") return err.message
        
        return "Some error, please try again..."

    }
}
const notify = new NotifServ()

export default notify