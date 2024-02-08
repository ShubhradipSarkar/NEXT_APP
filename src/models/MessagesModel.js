import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const MessagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: {true: "Please provide a username"},
    },
    mobile: {
        type: String,
        unique: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        
    }

})
const Messages = mongoose.models.messages || mongoose.model("messages", MessagesSchema);
export default Messages;