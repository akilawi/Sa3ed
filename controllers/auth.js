/**
 * Created by ahmadilaiwi on 7/4/15.
 */
module.exports = {
    login: function(req, res) {
        res.render('login');
    },
    signup: function(req, res) {
        res.render('signup');
    },
    signupPost: function(req, res){
        console.log(req.body);
      res.send('ahmad');
    },
    logout: function(req, res) {
        res.send('this is a log out page');
    }
};