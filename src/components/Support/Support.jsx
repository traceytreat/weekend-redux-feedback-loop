import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [newSupport, setNewSupport] =  useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newSupport !== ''){
            dispatch({
                type: 'SET_SUPPORT',
                payload: Number(newSupport)
            });
    
            // Navigate to comments
            history.push('/comments');
        } else {
            alert('Please fill out the input correctly');
        }

    }

    // Form for adding support level from 1-10
    return (
        <section className='feedback-form'>
            <h2>How well are you being supported?</h2>
            <button onClick={() => history.push('/understanding')}>BACK</button>
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
            
        </section>
    );
}

export default Support;