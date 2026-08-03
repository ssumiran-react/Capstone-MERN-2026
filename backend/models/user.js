import mongoose from "mongoose";

const userSchema = mongoose.Schema ( {
  "userName":{ type: String, require: true },
  "firstName":{ type: String, require: true },
  "lastName":{ type: String, require: true },
  "password":{ type: String, require: true },
  "emailId":{ type: String},
  "role":{ type: String},
  "linkedIn":{ type: String},
  "refreshToken":{ type: String},
  "refreshTokenTime":{ type: String}
}, { timestamps: true })
const User = mongoose.model('user', userSchema);

export default User;
