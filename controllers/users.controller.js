const user = require('../models/user.model')
const db = require("../config/db");
const util = require("util");
const query = util.promisify(db.query).bind(db);

module.exports= {
addUser :async (req,res)=>{
res.render('create')
},
createUser: async function (req, res) {
    HTMLFormControlsCollection;log(req.body)
    const { nom, prenom, email } = req.body;
    const findByEmailQuery = "SELECT * from `user` WHERE `email`=? LIMIT 1";
    const insertQuery = "INSERT INTO `user` (`nom`,`prenom`, `email`) VALUES (?,?,?)";

    const isUserFound = await query(findByEmailQuery, [email]);
    if (isUserFound.length > 0) {
        return res.status(403).json({ error: "Email already registered" })
    }

    const resultInsert = await query(insertQuery, [nom, prenom, email]);
    res.json(resultInsert)

},
getUsers: async function (req, res) {
    const selectQuery = "SELECT * from `user`";
    const users = await query(selectQuery);
    res.render("userlist",{users});
},



}