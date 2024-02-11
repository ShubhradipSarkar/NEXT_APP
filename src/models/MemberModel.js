import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: {true: "Please provide a username"},
    },
    guardian: {
        type: String,
        
    },
    dob: {
        type: String,
        
    },
    edu: {
        type: String,
    },
    profession:{
        type: String,
    },
    bGR: {
        type: String,
    },
    interest: {
        type: String,
    },
    mob: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    }


})
const Member = mongoose.models.members || mongoose.model("members", MemberSchema);
export default Member;