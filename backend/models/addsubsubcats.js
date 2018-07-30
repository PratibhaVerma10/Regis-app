const mongoose = require('mongoose');

const AddsubsubcatSchema = mongoose.Schema({
    subcat:{
        type: String,
        required: true
    },
    subsubcat:{
        type: String,
        required: true
    },
    sscat:{
        type: String,
        required: true
    }
});

const Addsubsubcat = module.exports = mongoose.model('Addsubsubcat', AddsubsubcatSchema);
 