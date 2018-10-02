var mongoose = require('mongoose');
var Category = require('./models/Category.js');
var Product = require('./models/Product.js');

module.exports = {
    configure: function (app) {

        // category post api
        app.post('/api/addcatmastermaster/', function (req, res, next) {
            Category.create(req.body, function (err, post) {
                //console.log(req.body);
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Category creation failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Category created successfully'
                    });
                }
            });
        });
        //list category api
        app.get('/api/listcatmaster', function (req, res, next) {
            Category.find(function (err, products) {
                if (err)
                    return next(err);
                res.json(products);
            });
        });

        //add product api
        app.post('/api/addproduct/', function (req, res, next) {

            Product.create(req.body, function (err, post) {
                console.log(req.body);
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Product creation failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Product created successfully'
                    });
                }
            });
        });
        //list product api  
        app.get('/api/listproduct', function (req, res, next) {
            Product.find()
                    .lean()
                    .populate('id', 'categotyname')
                    .exec((err, products) => {
                        if (err) {
                            console.log(err);
                            return next(err)
                        }
                        ;
                        //console.log(products)
                        res.send(products);
                    })
        });

        //get data by id
        app.get('/api/getproductdata/:id', function (req, res, next) {
            //console.log("hre is id"+req.params.id);
            Product.findById(req.params.id, function (err, post) {
                
                if (err)
                    return next(err);
               // console.log(post);
                res.json(post);
            });
        });
        //update product
        
       app.post('/api/editprodtmaster/', function(req, res, next) {
           //console.log(req.body);
           //console.log(req.body);
          Product.findOneAndUpdate(req.params.id, req.body, function (err, post) {
            //console.log(req.params.id);
            
            if (err) {
                    res.send({
                        status: 1,
                        message: 'product update failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'product updatesuccessfully'
                    });
                }
            
            
            });
        });
        
        
        //get data by id
        app.get('/api/getcatdata/:id', function (req, res, next) {
            //console.log("hre is id"+req.params.id);
            Category.findById(req.params.id, function (err, post) {
                
                if (err)
                    return next(err);
               // console.log(post);
                res.json(post);
            });
        });
        //update product
 
        
       app.put('/api/edicatmaster/:id', function(req, res, next) {
          // var id = req.params._id;
           //console.log(req.body);
          Category.findByIdAndUpdate(req.params.id,req.body, function (err, post) {
            console.log(post);
            if (err) return next(err);
            res.json(post);
            
            
            });
        });
        
        
        
        
        


    }
};