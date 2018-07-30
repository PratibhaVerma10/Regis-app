const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema({
    subcat:{
        type: String,
        required: true
    },
    sub:{
        type: String,
        required: true
    }
   
   
});

const Banner = module.exports = mongoose.model('Banner', BannerSchema);
 