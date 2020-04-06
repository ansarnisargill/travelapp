const Day = require('../Models/Day');
async function SaveDay(day) {
    let obj = new Day({
        name: day.name,
        description: day.description,
        clientDescription: day.client
    });
    await obj.save();
}
async function GetDay(id) {
    let day = await Day.findOne({ _id: id }).exec();
    return day;
}
async function GetAllDays() {
    let days = await Day.find({}).exec();
    return days;
}
async function DeleteDay(id) {
    await Day.deleteOne({_id:id}).exec();
}
module.exports = {
    SaveDay,
    GetDay,
    GetAllDays,
    DeleteDay
};