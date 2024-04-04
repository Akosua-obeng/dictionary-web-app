  const mongoose = require('mongoose')

  const CompanySchema = new mongoose.Schema({
    companyName:{
      type: String,
      required: [true, "Please add company name"],
    },

    foundedYear:{
      type: String,
      required: [true, "Please add company year founded"],
    },

    companySize:{
      type: Number,
      required: [true, "Please state company size"],
    },

    companyLocation: {
      type: String,
      required: [true, "Please add company location"]
    },

    companyAddress:{
      type: String,
      required: [true, "Please add company address"]
    },

    companyContact:{
      type: Number,
      required: [true, "Please add company contact"]
    },

    companySocialHandle:{
      type: String,
      required: [true, "Please add company social media handle"]
    },
    companyLogo:{
      type: String,
      required: [true, "Please add company logo"]
    },
  })
  

  module.exports = mongoose.model("Company", CompanySchema)

  // company

//  companyName
//  foundedYear
//  companySize
//  companyLocation
//  company Address
//  companyContanct
//  companySocialHandle
//  companyLogo