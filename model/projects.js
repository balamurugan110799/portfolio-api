const mongoose = require("mongoose")

const project = new mongoose.Schema({
    tag: {
        type: String,
        require: true,
        enum: ["challenge", "personal","work"]
    },
    title: {
        type: String,
        require: true,
    },
    des: {
        type: String,
        require: true,
    },
    preview_link: {
        type: String,
        require: true,
    },
    preview_count_flag: {
        type: Boolean,
        default:false,
        require: true,
    },
    heart_likes_count: {
        type: Boolean,
        default:false,
        require: true,
    },
    heart_likes: {
        type: Number,
        require: true,
        default:0
    },
    githab_links: {
        type: String,
        require: true,
    },
    gitlab_count: {
        type: Number,
        require: true,
        default:0
    },
})

module.exports = mongoose.model("project", project)

