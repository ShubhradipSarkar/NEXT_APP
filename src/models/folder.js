import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const FolderSchema = new mongoose.Schema({
    
    folderName: {
        type: "string",
    },
    photo_url: {
        type: [String],
    },
    
})
const DateFolderSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true,
    },
    Folders: {
        type: [FolderSchema],
    }
});
const Folder = mongoose.models.folder || mongoose.model("folder", DateFolderSchema);
export default Folder;