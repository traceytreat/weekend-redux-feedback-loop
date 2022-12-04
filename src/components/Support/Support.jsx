import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [newSupport, setNewSupport] =  useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport
        });

        // Navigate to comments
        history.push('/comments');
    }

    // Form for adding support level from 1-10
    return (
        <>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    placeholder="Number from 1-5"
                    min="1"
                    max="5"
                    value={newSupport}
                    onChange={(event) => setNewSupport(event.target.value)} 
                />
                <button type="submit">NEXT</button>
            </form> 
            
        </>
    );
}

export default Support;