import { useEffect, useState } from "react";
import "./AllEmps.css";
import { empStore } from "../../../redux/EmpState";
import EmpCard from "../EmpCard/EmpCard";

function AllEmps(): JSX.Element {
    const [allEmps, setAllEmps] = useState([])
    useEffect(()=>{
        let employees = empStore.getState().allEmployees
        setAllEmps(employees)
        
        const unsubscribe = empStore.subscribe(()=>{
            setAllEmps(empStore.getState().allEmployees)
        })
        return()=>{
            unsubscribe()
        }
    },[allEmps])

    return (
        <div className="AllEmps">
		{allEmps?.map(e => <EmpCard key={e.id} employee={e}/>)}
        </div>
    );
}

export default AllEmps;
