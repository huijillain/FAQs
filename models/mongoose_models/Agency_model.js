const mongoose = require('../mongoose_connect');
// Creating the Agency Schema
// With Mongoose, everything is derived from a Schema.
const AgencySchema = new mongoose.Schema({               //defining schema itself
    AgencyId: {
        type: Number,
        required: true,
        unique: true
    },
    AgncyAddress: {
        type: String,
        required: true,
        trim: true
    },
    AgncyCity: {
        type: String,
        required: true,
        trim: true
    },
    AgncyPostal: String,
    AgncyCountry: String,
    AgncyPhone: String,
    AgncyFax: String
    // more fields defined below
});
// Creating the Agency collection Model
// collection name is Agency
module.exports = mongoose.model('Agency', AgencySchema);
