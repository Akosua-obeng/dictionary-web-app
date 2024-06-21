const express = require("express");
const router = express.Router();
const {createCompany, getCompanyInfo, updateCompany, deleteCompany, fetchAllCompany} = require("../controllers/companyController");
const { getJobInfo } = require("../controllers/jobController");

router
  .route('/fetchAllCompany').get(
    fetchAllCompany
  )

router
  .route('/createCompany').post(
    createCompany
  )
  router
  .route('/:id').get(getCompanyInfo).delete(deleteCompany).patch(updateCompany)


module.exports = router