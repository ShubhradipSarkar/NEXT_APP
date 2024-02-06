import mongoose from "mongoose";
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
    }

})
const User = mongoose.model.users || mongoose.model("users", userSchema);
export default User;