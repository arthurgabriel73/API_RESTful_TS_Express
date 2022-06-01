import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        console.log("Connected to database!")
    } catch (e) {
        console.log("The connection gone wrong.")
        console.log(`Error: ${e}`)
    }
}

export default connect;