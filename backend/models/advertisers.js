const mongoose = require('mongoose');

const AdvertiserSchema = mongoose.Schema({
    fname:{
        type: String,
        required: true
    }
   
   
});

const Advertise = module.exports = mongoose.model('Advertise', AdvertiserSchema);
 