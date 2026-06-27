const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./models/listing');

const MONGO_URL = 'mongodb://127.0.0.1:27017/WanderCrush';

main()
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/listings', async (req, res) => {
  let allListings = await Listing.find({});
  res.render('listings/index.ejs', { allListings });
});

// Show Route (Updated to findById)
app.get('/listings/:id', async (req, res) => {
  let { id } = req.params;
  let reqListing = await Listing.findById(id);
  res.render('listings/viewListing.ejs', { reqListing });
});

app.listen(8080, () => {
  console.log('Listening To Port', 8080);
});
