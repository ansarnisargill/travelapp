const router = require('express').Router();
router.get('/status', async (req, res) => {
    let result = "Test";
    res.send(result);
});
module.exports=router;