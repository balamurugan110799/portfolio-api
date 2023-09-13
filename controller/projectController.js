const project = require("../model/projects")

exports.projectGetAll = async (req, res) => {
    try {
        const allProject = await project.find()
        const allProjectCount = await project.find()
        let heart = [];
        allProjectCount.forEach(element => {
            heart.push(element.heart_likes)
        });
        let github = [];
        allProjectCount.forEach(element => {
            github.push(element.gitlab_count)
        });
        var initialValue = 0;
        var totalGithubView = github.reduce((acc, cur) =>
            acc + cur, initialValue
        )

        var initialValue = 0;
        var totalHeart = heart.reduce((acc, cur) =>
            acc + cur, initialValue
        )
        console.log(totalHeart)
        res.status(200).json({
            status: "success",
            totalHeart: totalHeart,
            gitCount:totalGithubView,
            data: allProject,
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: err
        })
    }
}

exports.AddProject = async (req, res) => {
    try {
        const addProj = await project.create({
            tag: req.body.tag,
            title: req.body.title,
            des: req.body.des,
            preview_link: req.body.preview_link,
            heart_likes: req.body.heart_likes,
            githab_links: req.body.githab_links,
            gitlab_count: req.body.gitlab_count,
            img: req.body.img,
        })
        res.status(201).json({
            status: "success",
            data: addProj
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}

exports.updateProject = async (req, res) => {

    try {
        const projectId = (req.params.id)
        var projectfind = await project.find({ _id: projectId })
        var add;
        var gitcount;
        // projectfind[0].heart_likes_count === true ?   add = await projectfind[0].heart_likes + 1 : null
        if (req.body.heart_likes_count === true) {
            var add = await projectfind[0].heart_likes + 1;
            // return 
        }
        console.log(req.body.heart_likes_count, req.body.preview_count_flag)
        if (req.body.preview_count_flag === true) {
            var gitcount = await projectfind[0].gitlab_count + 1;
            console.log("preview_count_flag", projectfind[0].preview_count_flag === true)
            // return 
        }


        // console.log(projectfind[0].heart_likes_count, add)
        // var project = await project.findById(req.params.id)

        const findProject = await project.findByIdAndUpdate(projectId, {
            $set: {
                tag: req.body.tag,
                title: req.body.title,
                des: req.body.des,
                preview_link: req.body.preview_link,
                heart_likes: add,
                heart_likes_count: req.body.heart_likes_count,
                githab_links: req.body.githab_links,
                gitlab_count: gitcount,
                preview_count_flag: req.body.preview_count_flag,
                img: req.body.img,
            }
        }, { new: true })
        res.status(200).json({
            status: "success",
            data: findProject
        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}

exports.deleteProject = async (req, res) => {
    try {
        const projectId = (req.params.id)
        console.log(typeof (projectId))
        const deleteProject = await project.findOneAndDelete(projectId, { new: true })
        res.status(200).json({
            status: "success",
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message: err
        })
    }
}