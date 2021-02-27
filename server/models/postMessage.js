import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
})

// var,first argument can be whatever u want to name this schema
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage