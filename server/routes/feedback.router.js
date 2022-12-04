const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET route
router.get('/', (req, res) => {
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET error in feedback.router.js', error)
        res.sendStatus(500);
    });
});

// POST Route
router.post('/', (req, res) => {
    const feedbackItem = {
        feeling: req.body.feeling,
        understanding: req.body.understanding,
        support: req.body.support,
        comments: req.body.comments
    }
    const queryText = `INSERT INTO feedback
                        (feeling, understanding, support, comments)
                        VALUES
                        ($1, $2, $3, $4)`
    pool.query(queryText, [feedbackItem.feeling, feedbackItem.understanding, feedbackItem.support, feedbackItem.comments])
        .then(() => {
            console.log('POST successful');
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('POST error', error);
            res.sendStatus(500);
        })
});
