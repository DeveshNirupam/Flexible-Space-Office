const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add post response');
});

router.get('/getAll', (req, res) => {
    res.send('read post response');
});

module.exports = router;
