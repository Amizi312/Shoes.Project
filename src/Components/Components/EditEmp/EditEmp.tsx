import { useForm } from "react-hook-form";
import "./EditEmp.css";
import EmpModel from "../../../Models/EmpModel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import empService from "../../../Services/EmpServ";
import notify from "../../../Services/NotifServ";

function EditEmp(): JSX.Element {
    const {register, handleSubmit, formState, setValue} = useForm<EmpModel>()    
    const navigate = useNavigate()
    const params = useParams()
    const [employee, setEmployee] = useState<EmpModel>()

    useEffect(()=>{
        const id = +params.empId
        empService.getOneEmployee(id)
            .then(employee => {
                setEmployee(employee)
                setValue("id",employee.id)
                setValue("firstName",employee.firstName)
                setValue("lastName",employee.lastName)
                setValue("country",employee.country)
                setValue("city",employee.city)
                setValue("birthDate",employee.birthDate)
                setValue("title",employee.title)
                setValue("imageUrl",employee.imageUrl)
            })
            .catch(err => notify.errorMsg("Error" + err.message))
    },[])

    async function send(employee:EmpModel) {
        try {
            await empService.editEmployee(employee)
            notify.successMsg("Employee have been updated succefully")
            navigate("/workers")
        }
        catch(err:any) {
            notify.errorMsg(err.message)
        }
    }

    return (
        <div className="EditEmp">
			<form onSubmit={handleSubmit(send)}>
                <h2>Edit employee:</h2>

                <input type="hidden" {...register("id")}/>
                <label>first name:</label>
                <input type="text" {...register("firstName", EmpModel.stringValidation)} /> 
                <span className="error">{formState.errors.firstName?.message}<br/></span>

                <label>last name:</label>
                <input type="text" {...register("lastName", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.lastName?.message}<br/></span>
                
                <label>title:</label>
                <input type="text" {...register("title", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.title?.message}<br/></span>
                
                <label>country:</label>
                <input type="text" {...register("country", EmpModel.stringValidation)} /> 
                <span className="error">{formState.errors.country?.message}<br/></span>

                <label>city:</label>
                <input type="text" {...register("city", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.city?.message}<br/></span>

                <label>birthday:</label>
                <input type="text" {...register("birthDate", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.birthDate?.message}<br/></span>

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image")}/>

                <button>Done!</button>
            </form> 
        </div>
    );
}

export default EditEmp;
