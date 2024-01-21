import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import BestSeller from "../BestSeller/BestSeller";
import Home from "../Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/bestseller" element={<BestSeller/>}/>
            <Route path="/" element={<Navigate to="/home"/>} />
            <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
