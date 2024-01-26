import { NavLink } from "react-router-dom";
import "./Links.css";

function Links(): JSX.Element {
    return (
        <div className="Links">
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/bestseller">Best-seller</NavLink>
            <NavLink to="/aboutus">About us</NavLink>       
            <NavLink to="/dotells">Costumers' feedback</NavLink>       
            <NavLink to="/workers">Employees</NavLink>
        </div>
    );
}

export default Links;
