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
        let result = await dayService.GetAllDays();
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
            status: false
        });
    }
});
router.get("/day/:id", async (req, res) => {
    try {
        let result = await dayService.GetDay(req.params.id);
        res.send(result);
    }
    catch (err) {
        console.log(err);
        res.send({});
    }
});
router.put("/day", async (req, res) => {
    try {
        await dayService.UpdateDay(req.body);
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
module.exports = router;