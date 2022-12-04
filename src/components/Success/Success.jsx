import { useHistory } from 'react-router-dom';

function Success(){
    const history = useHistory();
    
    const handleClick = () => {

        // Navigate to beginning of form
        history.push('/');
    }
    // Page that shows upon successful form submission
    return (
        <>
            <h2>Thank You!</h2>
            <button onClick={handleClick}>Leave New Feedback</button>
        </>
    );
}

export default Success;