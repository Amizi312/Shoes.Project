import ShoesCard from "../ShoesCard/ShoesCard";
import "./BestSeller.css";
import nike from "../../../assets/nike.jpg"
import crocs from "../../../assets/crocs.jpg"
import adidas from "../../../assets/adidas.jpg"
import saucony from "../../../assets/saucony.jpg"
import redback from "../../../assets/redback.jpg"

function BestSeller(): JSX.Element {
	return (
        <div className="BestSeller">
			<ShoesCard brand="Nike" price={99} size={40} image={nike}/>
			<ShoesCard brand="Adidas" price={120} size={39} image={adidas}/>
			<ShoesCard brand="Crocs" price={79.90} size={26} image={crocs}/>
			<ShoesCard brand="RedBack" price={362} size={42} image={redback}/>
			<ShoesCard brand="Saucony" price={214} size={45} image={saucony}/>
        </div>
    );
}

export default BestSeller;
