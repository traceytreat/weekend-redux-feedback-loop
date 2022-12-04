import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review(){
    // A review of all data that was submitted

    const dispatch = useDispatch();
    const history = useHistory();

    const feedbackStore = useSelector(store => store.feedback);

    let review = {
        feeling: feedbackStore.feeling,
        understanding: feedbackStore.understanding,
        support: feedbackStore.support,
        comments: feedbackStore.comments
    }

    const handleSubmit = () => {
        axios.post('/feedback', review)
        .then((response) => {
            console.log(response);
            dispatch({
                type: 'CLEAR_FEEDBACK',
            })
            history.push('/success');
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feedbackStore.feeling}</p>
            <p>Understanding: {feedbackStore.understanding}</p>
            <p>Support: {feedbackStore.support}</p>
            <p>Comments: {feedbackStore.comments}</p>
            <button onClick={() => history.push('/comments')}>BACK</button>
            <button onClick={handleSubmit}>SUBMIT</button>
            
        </>
    );
}

export default Review;