import mongoose from "mongoose"

const Schema = mongoose.Schema
const ItemSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    email: String,
})