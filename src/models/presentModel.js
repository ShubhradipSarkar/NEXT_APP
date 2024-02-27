import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const presentSchema = new mongoose.Schema({
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
const Present = mongoose.models.present || mongoose.model("present", presentSchema);
export default Present;