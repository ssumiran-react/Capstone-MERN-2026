import Project from "../models/project.js";

//get All Projects releated to each User
export const getProjectByUser = async (req, res) => {
  try {  
    const projects = await Project.find({userId:req.query.id });//"6a70dcab34f17d9f5bd4f935" });//.sort({ createdAt: -1 });
    //console.log(req.query.id," userId: ",projects);
    
    res.status(200).json(projects);
  } catch(e) {
    console.log(e);
    res.status(400).json({ ErrorProjectByUser: e.message })
  }
}

//create/post a Project for User
export const createUserProject = async (req, res) => {  //console.log ("createUserProject",req.body);
  try { 
    const project = await Project.create(req.body);
    res.status(200).json(project);
  }catch(e) {
    console.log(e);
    res.status(400).json({ ErrorCrateUserProject: e.message })
  }
}

//Pup update Project for User
export const updatUserProject = async (req, res) => { //console.log ("updatUserProject: ",req.body);
    try {
      const project = await Project.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
      res.status(200).json(project);
    } catch(e) {
      console.log(e);
      res.status(400).json({ ErrorUpdateUserProject: e.message })
    }
}

//Delete a Project for User
export const deleteUserProject = async (req, res) => {  //console.log(req.params.id);
  try { 
    const project = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json(project);
  }catch(e) {
    console.log(e);
    res.status(400).json({ ErrorDeleteUserProject: e.message })
  }
}