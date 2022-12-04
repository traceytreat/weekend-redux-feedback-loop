import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <Feelings />
        </Route>
        <Route exact path='/understanding'>
          <Understanding />
        </Route>
        <Route exact path='/support'>
          <Support />
        </Route>
        <Route exact path='/comments'>
          <Comments />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
        <Route exact path='/success'>
          <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;
