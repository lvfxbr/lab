import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const dotenvConfig = dotenv.config();

dotenvExpand(dotenvConfig);

console.log({
    mongoDatabase: process.env.MONGO_DATABASE,
    mongoURI: process.env.MONGO_URI,
});