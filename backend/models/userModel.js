import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        password: String,
    },
    {
        collection: "users",
    }
);

const users = mongoose.model("users", userSchema);
export default users;
