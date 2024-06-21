const Job = require("../models/Job");

exports.createJob = async (req, res, next) => {
  const job = await Job.create(req.body)
  res.status(200).json({success: true, message: "Job created successfully", JobInfo: Job})
}

exports.fetchAllJob = async (req, res, next) => {
  const fetchJob = await Job.find({})
  res.status(200).json({success: true, message: "All jobs retrieved", totalJobs: fetchJob.length, JobInfo: fetchJob})
  
}

//READ JOB INFO
exports.getJobInfo = async (req, res, next) =>{
  const job = await Job.findById(req.params.id);

  if(!job){
    return res.status(400).json({ success : false, message : 'Job with id not found'})
  }
  res.status(200).json({
    success : true,
    data: job
  })
}

//UPDATE JOB
exports.updateJob = async (req, res, next) => {

  const job = await Job.findByIdAndUpdate(req.params.id, req.body)

  if(!job){
    return res.status(400).json({success : false})
  }

  res.status(200).json({
    sucess: true,
    data: job
  })
}

//DELETE JOB
exports.deleteJob = async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id)

  if(!job){
    return res.status(400).json({success : false})
  }
  res.status(200).json({
    success: true,
    message: "Job successfully deleted"
  })
}

// DELETE JOB
exports.delete = async (req, res, next) => {
  const job = await Job.deleteMany(req.params.id)

  if(!job){
    return res.status(400).json({success: false})
  }
  res.status(200).json({
    success: true,
    message: "job successfully deleted"
  })
}

