const express = require('express');
const router = express.Router();

const Register = require('../models/registered');
const AddCat = require('../models/addcats');
const Addsubcat = require('../models/addsubcats');
const Addsubsubcat = require('../models/addsubsubcats');
const Banner = require('../models/banners');
const Advertiser = require('../models/advertisers');

// "REGISTERED"///////////
router.get('/registered', (req, res, next)=> {
    Register.find(function(err, registered){
        res.json(registered);
    });
});

router.post('/register', (req, res, next)=> {
    let newRegister = new Register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image
    });
    newRegister.save((err, resgister) => {
        if(err)
        {
            res.json({msg: 'Failed'});
        }
        else {
            res.json({msg: 'Success'});
        }
    });
});

router.delete('/register/:id', (req, res, next)=> {
    Register.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
        
       });
});

router.get('/addcats', (req, res, next)=> {
    AddCat.find(function(err, addcats){
        res.json(addcats);
    });
});
//// "ADD Category"////////////
router.post('/addcat', (req, res, next)=> {
    let newAddCat = new AddCat({
        cat_name: req.body.cat_name
    });

    newAddCat.save((err, addCat) => {
        if(err)
        {
            res.json({msg: 'Failed'});
        }
        else
         {
            res.json({msg: 'Success'});
        }
    });
});

router.delete('/addcat/:id', (req, res, next)=> {
    AddCat.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
        
       });
});
//// "ADD SUB-Category"////////////
router.get('/addsubcats', (req, res, next)=> {
    Addsubcat.find(function(err, addsubcats){
        res.json(addsubcats);
    });
});

router.post('/addsubcat', (req, res, next)=> {
    let newAddsubcat = new Addsubcat({
        subcat: req.body.subcat,
        sname: req.body.sname
    });

    newAddsubcat.save((err, addsubcat) => {
        if(err)
        {
            res.json({msg: 'Failed'});
        }
        else
         {
            res.json({msg: 'Success'});
        }
    });
});

router.delete('/addsubcat/:id', (req, res, next)=> {
    Addsubcat.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
        
       });
});
//// "ADD SUb-SUb-Category"////////////
router.get('/addsubsubcats', (req, res, next)=> {
    Addsubsubcat.find(function(err, addsubsubcats){
        res.json(addsubsubcats);
    });
});

router.post('/addsubsubcat', (req, res, next)=> {
    let newAddsubsubcat = new Addsubsubcat({
        subcat: req.body.subcat,
        subsubcat: req.body.subsubcat,
        sscat: req.body.sscat
    });

    newAddsubsubcat.save((err, addsubsubcat) => {
        if(err)
        {
            res.json({msg: 'Failed'});
        }
        else
         {
            res.json({msg: 'Success'});
        }
    });
});

router.delete('/addsubsubcat/:id', (req, res, next)=> {
    Addsubsubcat.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
        
       });
});


//// "ADD BANNER"////////////
router.get('/banners', (req, res, next)=> {
    Banner.find(function(err, banners){
        res.json(banners);
    });
});

router.post('/banner', (req, res, next)=> {
    let newBanner = new Banner({
        subcat: req.body.subcat,
        sub: req.body.sub
    });

    newBanner.save((err, banner) => {
        if(err)
        {
            res.json({msg: 'Failed'});
        }
        else
         {
            res.json({msg: 'Success'});
        }
    });
});

router.delete('/banner/:id', (req, res, next)=> {
    Banner.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
        
       });
});
//// "ADD Advertiser"////////////
router.get('/advertisers', (req, res, next)=> {
    Advertiser.find(function(err, advertisers){
        res.json(advertisers);
    });
});

router.post('/advertiser', (req, res, next)=> {
    let newAdvertiser = new Advertiser({
        fname: req.body.fname
    });

    newAdvertiser.save((err, advertiser) => {
        if(err)
        {
            res.json({msg: 'Failed'});
        }
        else
         {
            res.json({msg: 'Success'});
        }
    });
});

router.delete('/advertiser/:id', (req, res, next)=> {
    Advertiser.remove({_id: req.params.id}, function (err, result){
        if (err)
        {
            res.json(err);
        }
        else {
            res.json(result);
        }
        
       });
});
module.exports = router;