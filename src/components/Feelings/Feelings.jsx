import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Feelings(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [newFeeling, setNewFeeling] =  useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newFeeling !== ''){
            dispatch({
                type: 'SET_FEELING',
                payload: Number(newFeeling)
            });
            // Navigate to understanding
            history.push('/understanding');
        } else {
            alert('Please fill out the input correctly');
        }
    }

    // Form for adding feelings from 1/10
    return (
        <section className='feedback-form'>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    placeholder="Number from 1-5"
                    min="1"
                    max="5"
                    value={newFeeling}
                    onChange={(event) => setNewFeeling(event.target.value)} 
                />
                <Button variant="contained" type="submit">NEXT</Button>
            </form>       
        </section>
    );

}

export default Feelings;