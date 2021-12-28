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
  .route('/api/users')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/api/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


// Set up POST, DELETE at /api/users/:id/friends/:friendsId
router
  .route('/api/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)
module.exports = router;