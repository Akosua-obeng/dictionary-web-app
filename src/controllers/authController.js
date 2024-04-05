const User = require("../models/User")

exports.logIn = async(req, res, next) => {
  //
  const username = await User.logIn(req.body.userName)
  res.status(200).json({data: username})

  const email = await User.logIn(req.body.email)
  if(!email){
    return res.json({message: 'email already exists'})
  }
  res.status(200).json({
    data: email
  })

  const password = await User.logIn(req.body.password)
  res.status(200).json({
    data: password
  })
}

exports.register = async(req, res, next) => {
  //
}

exports.logout = async(req, res, next) => {
  //
}

exports.getMe = async(req, res, next) => {
  //
}
