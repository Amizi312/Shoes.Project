import axios from "axios"
import EmpModel from "../Models/EmpModel"
import appConf from "../Utils/Conf"

class EmpServ{
public async getAllemployees(){
    const response = await axios.get<EmpModel[]>(appConf.employeeUrl)
    const employees = response.data
    return employees
}

public async getOneEmployee(id:number):Promise<EmpModel> {

    const response = await axios.get<EmpModel>(appConf.employeeUrl + id)   
    const employee = response.data
    return employee
}

public async addEmployee(employee:any): Promise<void> {

    const myFormData = new FormData()
    myFormData.append("firstName",employee.firstName)
    myFormData.append("lastName",employee.lastName)
    myFormData.append("country",employee.country)
    myFormData.append("city",employee.city)
    myFormData.append("birthDate",employee.birthDate)
    myFormData.append("title",employee.title)
    myFormData.append("image",employee.image[0])

    const response = await axios.post<EmpModel>(appConf.employeeUrl,myFormData)
    const addedEmployee = response.data

}

public async editEmployee(employee:EmpModel): Promise<void> {
    const myFormData = new FormData()
    myFormData.append("firstName",employee.firstName)
    myFormData.append("lastName",employee.lastName)
    myFormData.append("country",employee.country)
    myFormData.append("city",employee.city)
    myFormData.append("birthDate",employee.birthDate)
    myFormData.append("title",employee.title)
    myFormData.append("image",employee.image[0])
    const response = await axios.put<EmpModel>(appConf.employeeUrl+employee.id,myFormData)
    const addedEmployee = response.data


}

public async deleteEmployee(id: number): Promise<void> {
    await axios.delete<void>(appConf.employeeUrl+id)
}
}

const empService = new EmpServ()

export default empService