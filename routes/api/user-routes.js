const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


// Set up POST, DELETE at /api/users/:id/friends/:friendsId
router
  .route('/id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

// /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

module.exports = router;