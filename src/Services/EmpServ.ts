import axios from "axios"
import EmpModel from "../Models/EmpModel"
import appConf from "../Utils/Conf"
import { EmpActionType, empStore } from "../redux/EmpState"

class EmpServ{


// without Redux
// public async getallEmployees():Promise<EmpModel[]>{
//     const response = await axios.get<EmpModel[]>(appConf.employeeUrl)
//     const employees = response.data
//     return employees
// }
// public async getOneEmployee(id:number):Promise<EmpModel> {

//     const response = await axios.get<EmpModel>(appConf.employeeUrl + id)   
//     const employee = response.data
//     return employee
// }

// public async addEmployee(employee:any): Promise<void> {

    // const myFormData = new FormData()
    // myFormData.append("firstName",employee.firstName)
    // myFormData.append("lastName",employee.lastName)
    // myFormData.append("country",employee.country)
    // myFormData.append("city",employee.city)
    // myFormData.append("birthDate",employee.birthDate)
    // myFormData.append("title",employee.title)
    // myFormData.append("image",employee.image[0])

    // const response = await axios.post<EmpModel>(appConf.employeeUrl,myFormData)
    // const addedEmployee = response.data

// }

// public async editEmployee(employee:EmpModel): Promise<void> {
    // const myFormData = new FormData()
    // myFormData.append("firstName",employee.firstName)
    // myFormData.append("lastName",employee.lastName)
    // myFormData.append("country",employee.country)
    // myFormData.append("city",employee.city)
    // myFormData.append("birthDate",employee.birthDate)
    // myFormData.append("title",employee.title)
    // myFormData.append("image",employee.image[0])
    // const response = await axios.put<EmpModel>(appConf.employeeUrl+employee.id,myFormData)
    // const editedEmployee = response.data


// }

// public async deleteEmployee(id: number): Promise<void> {
//     await axios.delete<void>(appConf.employeeUrl+id)
// }

// with Redux
public async getallEmployees(): Promise<EmpModel[]> {
    let employees = empStore.getState().allEmployees
    if (!employees) { 
        console.log("No workers in the array.")
        const response = await axios.get<EmpModel[]>(appConf.employeeUrl)
        employees = response.data
        empStore.dispatch({ type: EmpActionType.FetchEmployees, payload: employees })
        }
    return employees
}

public async getOneEmployee(id: number):Promise<EmpModel>{
    let employees = empStore.getState().allEmployees
    let employee = employees.find(e => e.id === id)
    if(!employee){
        const response = await axios.get<EmpModel>(appConf.employeeUrl + id)
        employee = response.data
    }
    return employee
}
public async addEmployee(employee: EmpModel): Promise<void> {
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
    empStore.dispatch({type: EmpActionType.AddEmployee, payload:addedEmployee})
}

public async editEmployee(employee: EmpModel): Promise<void> {
    const myFormData = new FormData()
    myFormData.append("firstName",employee.firstName)
    myFormData.append("lastName",employee.lastName)
    myFormData.append("country",employee.country)
    myFormData.append("city",employee.city)
    myFormData.append("birthDate",employee.birthDate)
    myFormData.append("title",employee.title)
    myFormData.append("image",employee.image[0])
    const response = await axios.put<EmpModel>(appConf.employeeUrl+employee.id,myFormData)
    const editedEmployee = response.data
    empStore.dispatch({type: EmpActionType.EditEmployee, payload:editedEmployee})
}

public async deleteEmployee(id: number): Promise<void> {
    console.log(empStore.getState().allEmployees);

        await axios.delete<void>(appConf.employeeUrl + id)
        
        empStore.dispatch({type:EmpActionType.DeleteEmployee,payload:id})
        
}
}
const empService = new EmpServ()

export default empService