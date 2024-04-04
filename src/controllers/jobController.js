const Job = require("../models/Job");

exports.createJob = async (req, res, next) => {
  const job = await Job.create(req.body)
  res.status(200).json({success: true, message: "Job created successfully", JobInfo: Job})
}

//READ JOB INFO
exports.getJobInfo = async (req, res, next) =>{
  //id (3)
  const job = Job.findById(req.params.id);

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

  const job = Job.findByIdAndUpdate(req.params.id, req.body)

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
  const job = Job.findByIdAndDelete(req.params.id)

  if(!job){
    return res.status(400).json({success : false})
  }
  res.status(200).json({
    success: true,
    data: job
  })
}

// DELETE JOB
exports.delete = async (req, res, next) => {
  const job = Job.deleteMany(req.params.id)

  if(!user){
    return res.status(400).json({success: false})
  }
  res.status(200).json({
    success: true,
    data: job
  })
}

