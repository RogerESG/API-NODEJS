const { Router } = require('express');
const router = Router();

const location = require('../sample.json');


router.get('/', (req, res) => {
    
    res.json(location);
});




module.exports = router;