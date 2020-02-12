const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Aquí el esquema
const coasterSchema = new Schema({
    name: String,
    description: String,
    inversions: Number,
    length: Number,
    active: Boolean,
    park: { type: Schema.Types.ObjectId, ref: "Park" }
},
{
    timestamps: true
});
const coasterModel = mongoose.model("coasters", coasterSchema);
module.exports = mongoose.model('Coaster', coasterSchema)