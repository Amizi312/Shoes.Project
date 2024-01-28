import { useForm } from "react-hook-form";
import "./NewEmp.css";
import EmpModel from "../../../Models/EmpModel";
import empService from "../../../Services/EmpServ";
import { useNavigate } from "react-router-dom";

function NewEmp(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<EmpModel>()    
    const navigate = useNavigate()
    
    async function send(employee:EmpModel) {
        try {
            await empService.addEmployee(employee)
            alert("employee has been succesfully added!")
            navigate("/workers")
        }
        catch(err:any) {
            alert(err.message)
        }
    }


    return (
        <div className="NewEmp">
			 <form onSubmit={handleSubmit(send)}>
                <h2>Add employee:</h2>
                
                <label>employee first name:</label>
                <input type="text" {...register("firstName", EmpModel.stringValidation)} /> 
                <span className="error">{formState.errors.firstName?.message}<br/></span>

                <label>employee last name:</label>
                <input type="text" {...register("lastName", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.lastName?.message}<br/></span>
                
                <label>employee title:</label>
                <input type="text" {...register("title", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.title?.message}<br/></span>
                
                <label>employee country:</label>
                <input type="text" {...register("country", EmpModel.stringValidation)} /> 
                <span className="error">{formState.errors.country?.message}<br/></span>

                <label>employee city:</label>
                <input type="text" {...register("city", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.city?.message}<br/></span>

                <label>employee birthday:</label>
                <input type="text" {...register("birthDate", EmpModel.stringValidation)} />
                <span className="error">{formState.errors.birthDate?.message}<br/></span>

                <label>employee Image:</label>
                <input type="file" accept="image/*" {...register("image")}/>

                <button>Add employee</button>
            </form>
        </div>
    );
}

export default NewEmp;
