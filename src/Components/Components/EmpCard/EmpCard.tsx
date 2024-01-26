import EmpModel from "../../../Models/EmpModel";
import "./EmpCard.css";

interface EmpProps{
    employee: EmpModel
}
function EmpCard(props:EmpProps): JSX.Element {
    return (
        <div className="EmpCard">
            Name: {props.employee.firstName} {props.employee.lastName}
            <br></br>
            Title: {props.employee.title}
            <br></br>
            Resident: {props.employee.country}, {props.employee.city}
            <br></br>
            Birthday: {props.employee.birthDate}
            <br></br>
            <img src={props.employee.imageUrl}/>
        </div>
    );
}

export default EmpCard;
