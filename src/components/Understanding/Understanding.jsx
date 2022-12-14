import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Understanding(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [newUnderstanding, setNewUnderstanding] =  useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newUnderstanding !== ''){
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: Number(newUnderstanding)
            });
    
            // Navigate to support
            history.push('/support');
        } else {
            alert('Please fill out the input correctly');
        }
    }

    // Form for adding understanding from 1-10
    return (
        <section className='feedback-form'>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
                <Button variant="outlined" onClick={() => history.push('/')}>BACK</Button>
                <input 
                    type="number"
                    placeholder="Number from 1-5"
                    min="1"
                    max="5"
                    value={newUnderstanding}
                    onChange={(event) => setNewUnderstanding(event.target.value)} 
                />
                <Button variant="contained" type="submit">NEXT</Button>
            </form>    
            
        </section>
    );
}

export default Understanding;