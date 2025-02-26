import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

const memorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
},
{timestamps: true}
);

const Memory = mongoose.model('memory', memorySchema);

export default Memory;


