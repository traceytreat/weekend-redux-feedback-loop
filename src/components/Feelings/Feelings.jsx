import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        <>
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
                <button type="submit">NEXT</button>
            </form>       
        </>
    );

}

export default Feelings;