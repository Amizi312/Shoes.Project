import { useEffect, useState } from "react";
import "./RandomBrand.css";

function RandomBrand(): JSX.Element {
    const randomBrand = ["Nike", "Adidas", "Crocs", "RedBack", "Saucony"]
    const time = +(Math.floor(Math.random()*10000))
    const [brand,popBrand] = useState("")
    useEffect(
        ()=>{
            const timerId = setInterval(
                ()=>{
                const randomI = Math.floor(Math.random()*5)
                popBrand(randomBrand[randomI])
        },time)

        return ()=>{
            window.clearInterval(timerId)
        }
    },[])
    return (
        <div className="RandomBrand">
			<span>Someone just bought a {brand}</span>
        </div>
    );
}

export default RandomBrand;
