import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const PhotoSchema = new mongoose.Schema({
    description: {
        type: String,
        
    },
    photo_url: {
        type: String,
    },
    author: {
        type: String,
    }

})
const Gallery = mongoose.models.gallery || mongoose.model("gallery", PhotoSchema);
export default Gallery;