const User = require ('../../models/user')
const jwt = require ('jsonwebtoken')
const bcrypt = require('bcrypt');
module.exports = {
    create,
    login
  };
  

async function create(req, res) {
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      console.log(user)
      const token = createJWT(user)
      res.json(token)
      console.log(token)
    } catch (err) {
      // Client will check for non-2xx status code
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }
  async function login(req, res) {
    try {
      console.log(req.body)
      const user = await User.findOne({ email: req.body.email });
      console.log(user)
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }

  function createJWT(user) {
    return jwt.sign(

      { user }, 
      process.env.SECRET, 
      {expiresIn: '24h'});
    // jwt.sign() is a special method that does two things:
    // 1) creates a json web token with the provided payload, server secret and optional settings
    // 2) crytographically signs the token with the provided secret so it can be validated later
}