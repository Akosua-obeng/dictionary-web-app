const Company = require("../models/Company");

exports.createCompany = async (req, res, next) => {
  const company = await Company.create(req.body)
  res.status(200).json({success: true, message: "Company created successfully", CompanyInfo: Company})
}

//READ COMPANY INFO
exports.getCompanyInfo = async (req, res, next) =>{
  const company = await Company.findById(req.params.id);

  if(!company){
    return res.status(400).json({ success : false, message: 'Company with id not found'})
  }
  res.status(200).json({
    success : true,
    data: company
  })
}

//UPDATE COMPANY
exports.updateCompany = async (req, res, next) =>{
  
  const company = await Company.findByIdAndUpdate(req.params.id, req.body)

  if(!company){
    return res.status(400).json({success : false})
  }

  res.status(200).json({
    success: true,
    data: company
  })
}

//DELETE COMPANY
exports.deleteCompany = async (req,res, next) =>{
  const company = await Company.findByIdAndDelete(req.params.id)

  if(!company){
    return res.status(400).json({success : false})
  }
  res.status(200).json({
    success: true,
    message: "Company successfully deleted"
  })
}

//DELETE COMPANY
exports.delete = async (req, res, next) => {
  const company = await Company.deleteMany(req.params.id)

  if(!company){
    return res.status(400).json({success: false})
  }
  res.status(200).json({
    success: true,
    message: "Company successfully deleted"
  })
}