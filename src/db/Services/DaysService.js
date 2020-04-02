const Day = require('../Models/Day');
async function SaveUser(username, password) {
    let user = new Day({
        username: username,
        password: password
    });
 await user.save();
}
async function GetUser(username, password) {
    let user = await User.findOne({ username: username, password: password }).exec();
    return user;
}
module.exports = {
    SaveUser: SaveUser,
    GetUser:GetUser
};