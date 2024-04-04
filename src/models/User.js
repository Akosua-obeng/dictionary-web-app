//importing mongoose
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userName:{
    type: String,
    required: [false, "Please add a username"],
  },

  email:{
    type: String,
    unique: true,
    required: [true, "Please add an email"],
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please add your email address"]
  },
  password:{type: String},

  firstName:{
    type: String,
    required: [true, "first name is required"],

  },

  lastName:{
    type: String,
    required: [true, "last name is required"],
  },

  gender:{type: String},

  createdAt:{
    type: String,
    default: Date.now,
  },

  profileImage:{type: String},

  mobileNumber:{
    type: Number,
    unique: true,
    min: 10,
  },

  role: {
    type:String,
    enum: ["user", "company", "admin"],
    default: "user",
  }
})

// sampleFields: {
//   type: String,
//   required: false,
//   type: Boolean,
//   default: true,
//   required: [true, "Please add an email"],
//   enum: ["user", "business", "admin", "superadmin"],
//   match : ['regx pattern', "Please add an email" ]
// },


module.exports = mongoose.model("User", UserSchema)