import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Database Connected");
    return mongoose;
}

export default connect;
