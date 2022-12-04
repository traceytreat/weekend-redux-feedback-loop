import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

function Success(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleClick = () => {

        // clear previous form
        dispatch({
            type: 'CLEAR',

        });

        // Navigate to beginning of form
        history.push('/');
    }
    // Page that shows upon successful form submission
    return (
        <>
            <h2>Thank You!</h2>
            <Button variant="contained" onClick={handleClick}>Leave New Feedback</Button>
        </>
    );
}

export default Success;