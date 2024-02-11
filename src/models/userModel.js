import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: {true: "Please provide a username"},
    },
    email: {
        type: String,
        required: {true: "Please provide email"},
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isMember: {
        type: Boolean,
        default: false,
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
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
    },
    verifyToken: {
        type: String,
    },
    verifyTokenExpiry: {
        type: String,
    },
    profile_picture:{
        type: String,
        default: '/image_profile.png'
    }

})
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;