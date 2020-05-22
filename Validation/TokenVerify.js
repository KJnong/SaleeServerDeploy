const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {

    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).send('Acess denied');

    try {
        const verified = jwt.verify(token, process.env.Token_Key);
        req.user = verified;
        next();
        
    } catch (error) {
        res.status(400).send('Invalid token')        
    }
    
}