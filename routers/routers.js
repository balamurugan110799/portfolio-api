const routers = require("express").Router()
const {createUsers, LoginController} = require("../controller/userController")
const {projectGetAll, AddProject,updateProject, deleteProject} = require("../controller/projectController")

routers.route("/signUp").post(createUsers)
routers.route("/login").post(LoginController)


routers.route("/projectGetAll").get(projectGetAll)
routers.route("/addProject").post(AddProject)
routers.route("/updateProject/:id").put(updateProject)
routers.route("/deleteProject/:id").delete(deleteProject)



module.exports = routers