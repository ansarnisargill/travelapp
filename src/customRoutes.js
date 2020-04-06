const router = require('express').Router();
const dayService = require('./db/Services/DaysService');
router.get('/status', async (req, res) => {
    let result = "Test";
    res.send(result);
});
router.post("/day", async (req, res) => {
    try {
        await dayService.SaveDay(req.body);
        res.send({
            status: true
        });
    }
    catch (err) {
        console.log(err);
        res.send({
            status: true
        });
    }
});
router.get("/day", async (req, res) => {
    try {
        let result=await dayService.GetAllDays();
        console.log(result);
        res.send(result);
    }
    catch (err) {
        console.log(err);
        res.send([]);
    }
});
router.delete("/day/:id", async (req, res) => {
    try {
        await dayService.DeleteDay(req.params.id);
        res.send({
            status: true
        });
    }
    catch (err) {
        console.log(err);
                res.send({
            status:false
        });
    }
});
module.exports = router;