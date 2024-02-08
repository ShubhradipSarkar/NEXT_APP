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
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;