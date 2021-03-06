const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
      User.find({})
        .populate ({
          path: 'thoughts',
          select: '-__v'
        })
        .populate ({
          path: 'friends',
          select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .populate ({
          path: 'thoughts',
          select: '-__v'
        })
        .populate ({
          path: 'friends',
          select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    //add a user to friend list
    addFriend({params}, res) {
      Users.findOneAndUpdate({_id: params.id}, {$push: { friend: params.friendId}}, {new: true})
      .populate({
        path: 'friends', 
        select: ('-__v')})
      .select('-__v')
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({message: 'No user found with this id!'});
              return;
          }
      res.json(dbUsersData);
      })
      .catch(err => res.json(err));
  },

    //delete a friend
    deleteFriend({ params }, res) {
      Users.findOneAndUpdate({_id: params.id}, {$pull: { friend: params.friendId}}, {new: true})
      .populate({
        path: 'friends', 
        select: '-__v'})
      .select('-__v')
      .then(dbUserData => {
          if(!dbUserData) {
              res.status(404).json({message: 'No user found with this id'});
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  }
}

module.exports = userController;