const mongoose = require('mongoose');

const AddsubcatSchema = mongoose.Schema({
    subcat:{
        type: String,
        required: true
    },
    sname:{
        type: String,
        required: true
    }
   
   
});

const Addsubcat = module.exports = mongoose.model('Addsubcat', AddsubcatSchema);
 