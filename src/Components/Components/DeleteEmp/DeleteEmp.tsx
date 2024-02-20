import { useNavigate } from "react-router-dom";
import "./DeleteEmp.css";
import { useEffect } from "react";


function DeleteEmp(): JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/workers")
    }, 10)
  }, [])
        return (
        <div className="DeleteEmp">
        </div>
    );
}

export default DeleteEmp;
