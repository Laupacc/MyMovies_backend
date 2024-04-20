var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const OWM_API_KEY = process.env.OWM_API_KEY;

router.get('/movies', (req, res) => {

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ movies: data.results });
        })

});

router.get('/tv', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${OWM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.json({ tv: data.results });
        })
});






module.exports = router;
