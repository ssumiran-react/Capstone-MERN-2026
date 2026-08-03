import mongoose from "mongoose";

const projectSchema = mongoose.Schema ( {
  "projectName":{ type: String, require: true },
  "projectDesc":{ type: String, require: true },
  "gitHub":{ type: String},
  "url":{ type: String},
  "startAt":{ type: String, require: true },
  "endAt":{ type: String, require: true },
  "userId":{ type: String, require: true },
  "userName":{ type: String, require: true },
  "isActive":{ type: String, require: true },
  "details":[{
    "status":{ type: String, require: true },
    "reason":{ type: String, require: true },
    "createdAt":{ type: String}
  }]
})
const Project = mongoose.model('project', projectSchema);

export default Project;