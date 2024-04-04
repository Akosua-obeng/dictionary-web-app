const express = require("express")
const router = express.Router();
const {createUser, getUserInfo, updateUser, deleteUser} = require("../controllers/userController")


// const router = express.Router({
//   mergeParams: true
// });

router
  .route('/createUser').post(
    createUser
  )

  //gets the user info by id
  router
  .route('/:id').get(
    getUserInfo
  )

  //delete the user by id
  router
  .route('/:id').delete(
    deleteUser
  )

  router
  .route('/:id').patch(
    updateUser
  )


module.exports = router;