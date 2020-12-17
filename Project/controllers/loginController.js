var tokenGenerator = require('../infrastructure/tokenGenerator');

exports.loginGet = (req, res) => {
    res.render('login', { layout: 'layouts/loginLayout'});
}

exports.loginPost = (req, res) => {
    res.send(tokenGenerator.generateToken(req.body.email, req.body.password));
}