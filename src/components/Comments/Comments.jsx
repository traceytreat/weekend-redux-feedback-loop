import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments (){
    const dispatch = useDispatch();
    const history = useHistory();

    const [newComment, setNewComment] =  useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });

        // Navigate to review
        history.push('/review');
    }
    // Form for adding comments
    return (
        <section className='feedback-form'>
            <h2>Any comments you want to leave?</h2>
            <button onClick={() => history.push('/support')}>BACK</button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Comments"
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)} 
                />
                <button type="submit">NEXT</button>
            </form>
        </section>
    );
}

export default Comments;