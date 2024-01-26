import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import BestSeller from "../BestSeller/BestSeller";
import Home from "../Home/Home";
import About from "../About/About";
import CostumersFeedback from "../CostumersFeedback/CostumersFeedback";
import EmpWin from "../EmpWin/EmpWin";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/bestseller" element={<BestSeller/>}/>
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="*" element={<PageNotFound/>}/>
                <Route path="/aboutus" element={<About/>}/>
                <Route path="dotells" element={<CostumersFeedback/>}/>
                <Route path="/workers" element={<EmpWin/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
