import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const librarySchema = new mongoose.Schema({
    author: {
        type: String,
    },
    book : {
        type: String,
    },
    amount:{
        type: Number,
    }
})
const Library = mongoose.models.library || mongoose.model("library", librarySchema);
export default Library;