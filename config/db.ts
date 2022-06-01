import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        Logger.info("Connected to database!")
    } catch (e) {
        Logger.error("The connection gone wrong.")
        Logger.error(`Error: ${e}`)
        process.exit(1);
    }
}

export default connect;