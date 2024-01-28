import { NavLink, useParams } from "react-router-dom";
import "./SingleEmp.css";
import { useEffect, useState } from "react";
import EmpModel from "../../../Models/EmpModel";
import empService from "../../../Services/EmpServ";

function SingleEmp(): JSX.Element {
    const params = useParams()
    const [employee, setworker] = useState<EmpModel>()
    
    useEffect(()=>{
        const id = +params.empId // prodId must be same name as declared in the routing!
        empService.getOneEmployee(id)
            .then(employee => setworker(employee))
            .catch(err => console.log("Error" + err.message))
    },[])
    
    return (
        <div className="SingleEmp">
			{employee &&
            <>
            Name: {employee.firstName} {employee.lastName}
            <br></br>
            Title: {employee.title}
            <br></br>
            Resident: {employee.country}, {employee.city}
            <br></br>
            Birthday: {employee.birthDate}
            <br></br>
            <img src={employee.imageUrl}/>
            </>}
            <br/>
            <NavLink to={"/workers/editemployee/" + employee?.id}>Edit Worker</NavLink>
            <span> | </span>
            <NavLink to="/workers" onClick={()=>{
                empService.deleteEmployee(employee.id)}}>Delete Worker</NavLink>
            <span> | </span>
            <NavLink to="/workers">Back to all workers</NavLink>

        </div>
    );
}

export default SingleEmp;
