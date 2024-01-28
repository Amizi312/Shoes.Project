import axios from "axios"
import EmpModel from "../Models/EmpModel"
import appConf from "../Utils/Conf"

class EmpServ{
public async getAllemployees(){
    const response = await axios.get<any>(appConf.employeeUrl)
    const employees = response.data
    return employees
}

public async getOneEmployee(id:number):Promise<any> {

    const response = await axios.get<any>(appConf.employeeUrl + id)   
    const employee = response.data
    return employee
}

}

const empService = new EmpServ()

export default empService