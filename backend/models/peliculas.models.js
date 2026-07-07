import{Schema,model}from "mongoose";

const Schema = new Schema({
    nombrepelicula : String,
    genero : String
})

export const tablaPeliculas = new model("tablaPeliculas", Schema);