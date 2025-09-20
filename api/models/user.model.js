import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture:{
      type:String,
      default:'https://tse3.mm.bing.net/th/id/OIP.dCpgPQ0i-xX2gZ-yonm54gHaHa?pid=Api&h=220&P=0',
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
