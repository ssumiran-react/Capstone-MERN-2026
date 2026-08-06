import Project from "../models/project.js";

//get All Projects releated to each User
export const getProjectByUser = async (req, res) => {
  try {  console.log(req.params);
    const projects = await Project.find({userId : req.params.userId});//.sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch(e) {
    console.log(e);
    res.status(400).json({ ErrorProjectByUser: e.message })
  }
}

//create/post a Project for User
export const createUserProject = async (req, res) => {  //console.log(req.body);
  try { 
    const project = await Project.create(req.body);
    res.status(200).json(project);
  }catch(e) {
    console.log(e);
    res.status(400).json({ ErrorCrateUserProject: e.message })
  }
}