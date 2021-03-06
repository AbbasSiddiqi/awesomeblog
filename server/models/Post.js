import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  _creator: { type: Schema.ObjectId, ref: 'User' },
  _comments: [ { type: Schema.ObjectId, ref: 'Comment'} ],
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

postSchema.plugin(mongoosePaginate);

const Post = mongoose.model('Post', postSchema);

export default Post;
