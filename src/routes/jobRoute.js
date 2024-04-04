const express = require("express")
const router = express.Router();
const {createJob, getJobInfo, updateJob, deleteJob} = require("../controllers/jobController")

router
  .route('/createJob').post(
    createJob
  )

  //gets, deletes, updates the job info by id the job info by id
  router
  .route('/:id').get(getJobInfo).delete(deleteJob).patch(updateJob)


module.exports = router;

