import mongoose from "mongoose";

const approvedResumeSchema = mongoose.Schema({
    applyingFor: String,
    fullName: String,
    phone_number: String,
    emailID: String,
    key_skills: String,
    comments: String,
    resumeURL: String,
});

const approvedResumes = mongoose.models.approvedresume || mongoose.model('approvedresume', approvedResumeSchema);

export default approvedResumes