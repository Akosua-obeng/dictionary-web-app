//importing
const User = require("../models/User")

exports.createUser = async (req, res, next) => {
  // console.log(req.body)
  const user = await User.create(req.body)
  res.status(200).json({success: true, message: "user created successfully", userInfo: user})
  // console.log(user)
}


// READ USER INFO
exports.getUserInfo = async (req, res , next) => {
  // id (3)
  const user = await User.findById(req.params.id);

       if(!user){
           return res.status(400).json({  success : false, message : 'User with id not found' })
       }

       res.status(200).json({
           success : true,
           data : user
       })
}

// UPDATE USER
exports.updateUser = async (req, res , next) =>{
  // id (3)
  const user = await User.findByIdAndUpdate(req.params.id, req.body);

  if(!user){
    return res.status(400).json({success : false})
  }

  res.status(200).json({
    success: true,
    data: user
  })
  
}

// DELETE USER
exports.deleteUser = async (req, res , next) =>{
  // id (3)
  const user = await User.findByIdAndDelete(req.params.id);
  
  if(!user){
    return res.status(400).json({success : false})
  }
  res.status(200).json({
    success: true,
    // data:user
    message: "Succesfully deleted"
  })
}
// DELETE USER
exports.delete = async (req, res , next) =>{
  // id (3)
  const user = await User.deleteMany(req.params.id)

  if(!user){
    return res.status(400).json({success : false})
  }
  res.status(200).json({
    success: true,
    message: "successfully deleted"
    // data: user
  })
}
  // console.log(user, 'user field')

