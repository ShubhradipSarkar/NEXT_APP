import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: {true: "Please provide a username"},
    },
    mobile: {
        type: String,
        
    },
    designation: {
        type: String,
        
    },
    bio: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

})
const Member = mongoose.models.members || mongoose.model("members", MemberSchema);
export default Member;