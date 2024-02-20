import { useEffect, useState } from "react";
import EmpModel from "../../../Models/EmpModel";
import "./EmpWin.css";
import empService from "../../../Services/EmpServ";
import EmpCard from "../EmpCard/EmpCard";
import { NavLink } from "react-router-dom";
import AllEmps from "../AllEmps/AllEmps";

function EmpWin(): JSX.Element {
    const [employees, setEmployees] = useState<EmpModel[]>([]) 

    useEffect(()=>{
      empService.getallEmployees()
      .then(employees=>setEmployees(employees))
      .catch(err => alert(err.message))  
    },[])
    return (
        <div className="EmpWin">
        <AllEmps/>
      <NavLink to="/workers/newemployee">➕</NavLink>
        </div>
    );
}

export default EmpWin;
