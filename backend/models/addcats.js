const mongoose = require('mongoose');

const AddCatSchema = mongoose.Schema({
    cat_name:{
        type: String,
        required: true
    }
   
});

const AddCat = module.exports = mongoose.model('AddCat', AddCatSchema);
 