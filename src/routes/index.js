const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "zona": "callao",
        "radio": "20"
    }
    res.json(data);
});

module.exports = router;