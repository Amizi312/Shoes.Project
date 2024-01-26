import { useEffect, useState } from "react";
import EmpModel from "../../../Models/EmpModel";
import "./EmpWin.css";
import empService from "../../../Services/EmpServ";
import EmpCard from "../EmpCard/EmpCard";

function EmpWin(): JSX.Element {
    const [empolyees, setEmployees] = useState<EmpModel[]>([]) 

    useEffect(()=>{
      empService.getAllemployees()
      .then(empolyees=>setEmployees(empolyees))
      .catch(err => alert(err.message))  
    },[])
    return (
        <div className="EmpWin">
			{empolyees.map(e => <EmpCard key={e.id} employee={e}/>)}
        </div>
    );
}

export default EmpWin;
