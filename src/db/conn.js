import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery", true);

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ndgtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Conectado com sucesso no Atlas!")
}

main().catch(console.error);

export default main;


