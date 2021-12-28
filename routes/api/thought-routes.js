const router = require('express').Router();
const { 
  getAllThoughts, 
  getThoughtById, 
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

router
  .route('/api/thoughts')
  .get(getAllThoughts)

router
  .route('/api/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)

router
  .route('/:userId')
  .post(addThought)

router
  .route('/api/thoughts/:thoughtId/reactions')
  .post(addReaction)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction)

module.exports = router;