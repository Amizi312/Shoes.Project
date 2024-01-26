import "./FeedbackCard.css";
interface feedbackProps{
        username:string;
        userText:string;
    }
function FeedbackCard(props:feedbackProps): JSX.Element {  
        return (
        <div className="FeedbackCard">
			<p>Name: {props.username}
            <br></br>
            Feedback:
                <br></br>
                {props.userText}
            </p>
        </div>
    );
}

export default FeedbackCard;
