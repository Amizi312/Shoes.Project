import "./FirstSale.css";

function FirstSale(): JSX.Element {
    function firstDay():boolean{
        const date = new Date()
        const day = date.getDate()
        if (day===1)
            return true
        else 
            return false
    }
    return (
        <div className="FirstSale">
			{firstDay()?<span>Happy new month. This month sale is right <a>here</a>.</span>:<></>}
        </div>
    );
}

export default FirstSale;
