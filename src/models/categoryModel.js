import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const categorySchema = new mongoose.Schema({
    description: {
        type: String,
        
    },
    description_short: {
        type: String,
    },
    photo_url: {
        type: [String],
    },
    title : {
        type: String,
    }

})
const Category = mongoose.models.category || mongoose.model("category", categorySchema);
export default Category;