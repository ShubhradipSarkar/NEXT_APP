import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const historySchema = new mongoose.Schema({
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
const History = mongoose.models.history || mongoose.model("history", historySchema);
export default History;