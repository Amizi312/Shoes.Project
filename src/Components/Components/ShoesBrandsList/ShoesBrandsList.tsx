import Marquee from "react-fast-marquee";
import "./ShoesBrandsList.css";

function ShoesBrandsList(): JSX.Element {
    const brandsList = [
    {id: 0, brand: "Nike"},
    {id: 1, brand: "Hush Puppies"},
    {id: 2, brand: "Adidas"},
    {id: 3, brand: "Calvin Klein"},
    {id: 4, brand: "Crocs"},
    {id: 5, brand: "Timberland"},
    {id: 6, brand: "RedBack"},
    {id: 7, brand: "Puma"},
    {id: 8, brand: "Steve Madden"},
    {id: 9, brand: "Skechers"},
    {id: 10, brand: "Teva Naot"},
    {id: 11, brand: "Birkenstock"},
    {id: 12, brand: "Saucony"},
    {id: 13, brand: "Nine West"},
    {id: 14, brand: "Reebok"},
]
    return (
        <div className="ShoesBrandsList">
			<Marquee>We sell all brands include:&nbsp;{brandsList.map(item => <span key={item.id}>{item.brand}&nbsp;|&nbsp;</span>)}</Marquee>
        </div>
    );
}

export default ShoesBrandsList;
