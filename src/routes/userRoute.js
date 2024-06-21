const express = require("express")
const router = express.Router();
const {createUser, getUserInfo, updateUser, deleteUser, fetchAllUser} = require("../controllers/userController")


// const router = express.Router({
//   mergeParams: true
// });
router
  .route('/fetchAllUser').get(
    fetchAllUser
  )

router
  .route('/createUser').post(
    createUser
  )

  //gets, deletes, updates the user info by id
  router
  .route('/:id').get(getUserInfo).delete(deleteUser).patch(updateUser)



module.exports = router;