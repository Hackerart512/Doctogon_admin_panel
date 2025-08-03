import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({ name: String }, { _id: false });

const stateSchema = new mongoose.Schema({
  name: String,
  cities: [citySchema],
}, { _id: false });

const countrySchema = new mongoose.Schema({
  name: String,
  states: [stateSchema],
});

export const Location = mongoose.model('Location', countrySchema);
