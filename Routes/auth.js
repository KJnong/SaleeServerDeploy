const router = require('express').Router();
const userModel = require('../Models/User')
const { RegiserValidation } = require("../Validation/Validation")
const { LoginValidation } = require("../Validation/Validation")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {

    console.log(req.body);
    
    //valadating req.body
    const { error } = await RegiserValidation(req.body);

    if (error) return res.status(404).send(error.details[0].message)

    //checking if email already exist
    const emailExist = await userModel.findOne({ email: req.body.email })

    if (emailExist) {
        return res.status(401).send("Email already exist")
    }

    
    //hash password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)


    const user = new userModel(
        {
            retailer: req.body.retailer,
            email: req.body.email,
            password: hashedPassword
        })

    try {
        const userRes = await user.save();
        res.send(userRes)

    }
    catch (err) {
        res.status('404').send(err);
    }

})

router.post('/login', async (req, res) => {
    //valadating req.body
    const { error } = await LoginValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message)

    //checking if email already exist
    const user = await userModel.findOne({ email: req.body.email })
    if (!user) res.status(400).send("Username or Password incorrect")

    //check if password matches
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) res.status(400).send("Username or Password incorrect");

    //set up token
    const token = jwt.sign({email: user.email, name:user.retailer}, process.env.Token_Key );
    res.json({token: token})

})

module.exports = router;