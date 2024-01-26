import axios from "axios"
import EmpModel from "../Models/EmpModel"
import appConf from "../Utils/Conf"

class EmpServ{
public async getAllemployees(){
    const response = await axios.get<any>(appConf.employeeUrl)
    console.log(response)
    const employees = response.data
    return employees
}
}

const empService = new EmpServ()

export default empService