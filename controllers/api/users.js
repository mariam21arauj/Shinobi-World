const User = require ('../../models/user')
const jwt = require ('jsonwebtoken')

module.exports = {
    create
  };
  

async function create(req, res) {
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      const token = createJWT(user)
      console.log(res.json(token))
      res.json(token)
    } catch (err) {
      // Client will check for non-2xx status code
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }

  function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'});
    // jwt.sign() is a special method that does two things:
    // 1) creates a json web token with the provided payload, server secret and optional settings
    // 2) crytographically signs the token with the provided secret so it can be validated later
}