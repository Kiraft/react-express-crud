import { mongoose } from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost/pruebacrud");
        console.log("DB Conectada");
    } catch (error) {
        console.log(error);
    }
};