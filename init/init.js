const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/WanderCrush";

main()
    .then(async () => {
        console.log("Connected to DB");
        await initDB();
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function initDB() {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Was Initialized");
}