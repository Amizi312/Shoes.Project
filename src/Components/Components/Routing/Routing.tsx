import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import BestSeller from "../BestSeller/BestSeller";
import Home from "../Home/Home";
import About from "../About/About";
import CostumersFeedback from "../CostumersFeedback/CostumersFeedback";
import EmpWin from "../EmpWin/EmpWin";
import SingleEmp from "../SingleEmp/SingleEmp";
import NewEmp from "../NewEmp/NewEmp";
import EditEmp from "../EditEmp/EditEmp";
import DeleteEmp from "../DeleteEmp/DeleteEmp";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/bestseller" element={<BestSeller/>}/>
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/aboutus" element={<About/>}/>
                <Route path="/dotells" element={<CostumersFeedback/>}/>
                <Route path="/workers" element={<EmpWin/>}/>
                <Route path="/workers/:empId" element={<SingleEmp/>}/>
                <Route path="/workers/newemployee" element={<NewEmp/>}/>
                <Route path="/workers/editemployee/:empId" element={<EditEmp/>}/>
                <Route path="/workers/delete" element={<DeleteEmp/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
