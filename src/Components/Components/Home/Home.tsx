import BestSeller from "../BestSeller/BestSeller";
import FirstSale from "../FirstSale/FirstSale";
import ShoesBrandsList from "../ShoesBrandsList/ShoesBrandsList";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
		   <h3>How to choose a shoe?</h3>
           <FirstSale/>
           <iframe src="https://www.youtube.com/embed/8bWMPpS57Ok?si=Lj3_RlJlGVZVL4zU"></iframe>
            <ShoesBrandsList/>
        </div>
    );
}

export default Home;
