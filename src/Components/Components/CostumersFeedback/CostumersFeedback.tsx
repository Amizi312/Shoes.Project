import FeedbackCard from "../FeedbackCard/FeedbackCard";
import "./CostumersFeedback.css";

function CostumersFeedback(): JSX.Element {
    
	return (
        <div className="CostumersFeedback">
			<FeedbackCard username="Amichai" userText="There is a vary of shoes."/>
			<FeedbackCard username="Amit" userText="I really enjoy my new shoes."/>
			<FeedbackCard username="Harel" userText="These shoes are so cool."/>
			<FeedbackCard username="Tehila" userText="My first shoes are from here."/>
			<FeedbackCard username="Nasrin" userText="Ana bahibak."/>
			<FeedbackCard username="Bary" userText="erdsfds"/>
			<FeedbackCard username="Apple" userText="Pizza"/>
			<FeedbackCard username="Denia" userText="Katzefet"/>
			<FeedbackCard username="Coco" userText="Melon"/>
			<FeedbackCard username="Elephant" userText="Grey"/>
			<FeedbackCard username="Dodo" userText="come back"/>
        </div>
    );
}

export default CostumersFeedback;
