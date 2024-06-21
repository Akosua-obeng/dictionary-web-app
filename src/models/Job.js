  const mongoose = require("mongoose")

  const JobSchema = new mongoose.Schema({
    jobTitle:{
      type: String,
      unique:false,
      required: [true, "Please add job title"]
    },
    jobDescription:{
      type: String,
      unique: false,
      required: [true, "Please add job description"]
    },

    jobTypes: {
      type: String,
      unique: false,
      required: [true, "Please add job type"],
      enum: ["part-time", "contract", "permanent"],
    },

    jobType: {
      type: String,
      required: [true, "Please add type"],
      enum: ["office", "remote", "hybrid"]
    },

    jobRequirement:{
      type: String,
      required: [true, "Please add job requirements"]
    },

    jobSharingURL:{
      type: String,
      unique: true,
      required: [true, "please add a job sharing url"]
    },

    jobSalary:{
      type: String,
      required: [true, "Salary required"],
    },

    postedDate:{
      type: String,
      default: Date.now
    },

    jobCategory:{
      type: String,
      required: [true, "Job category is required"]
    },

    jobSearchTags: {
      type: String,
      match: []
    }
  })

  module.exports = mongoose.model("Job", JobSchema)

  // Job

  // jobDescription
  // jobTypes . enum of part-time , contract , permament
  // jobRequirement
  // jobSharingURL
  // jobSalary
  // postedDate
  // jobCategory 
  // jobSearchTags