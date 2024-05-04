import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: {
    type: String,
  },

  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  category:{
    type: String,
  },
  image:{
    type: String,
  }
});

const Book =  mongoose.model("Book", bookSchema)

export default Book;