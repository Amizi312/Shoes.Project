import "./ShoesCard.css";
interface ShoesProps{
    brand:string;
    price:number;
    size:number;
    image:string;
}
function ShoesCard(props:ShoesProps): JSX.Element {   
    return (
        <div className="ShoesCard">
			<p>Brand: {props.brand}</p>
			<p>Price: {props.price}</p>
			<p>Size: {props.size}</p>
			<img src = {props.image}/>

        </div>
    );
}

export default ShoesCard;
