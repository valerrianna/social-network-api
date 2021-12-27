const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: 'You must enter a text',
        
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'You must have a username'
    },
    reactions: {

    }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});