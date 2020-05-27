const express = require('express')
const router = express.Router()
const UsersData = require('../models/users')
const ProjectData = require('../models/project_data')
const CustomersData = require('../models/customers')
const Navigation = require('../models/navigation')

const mongoose = require('mongoose')
// const db = 'mongodb://antwerk:antwerk18@ds040309.mlab.com:40309/antwerkdb'

const db = 'mongodb://admin:4834dbpassword@ds054118.mlab.com:54118/admin_ui';

mongoose.set('useFindAndModify', false);

mongoose.connect(db,{useNewUrlParser:true})
    .then(() => {
        console.log('start api.js')
      })
      .catch((err) => {
        console.log('Error on start: ' + err);
    })


// Routers
router.get('/', (req, res) => {
    res.send('From API route')
})

router.get('/Users', (req, res) => {
    UsersData.find({},(err, users_data) => {
            res.status(200).send(users_data)
             console.log('req.body: ', users_data);
        },
        (err) => {
            return res.res.status(500).send(err)
        }
    )   
})

router.get('/ProjectData', (req, res) => {
    ProjectData.find({},(err, customers_data) => {
            res.status(200).send(customers_data)
             console.log('req.body: ', customers_data);
        },
        (err) => {
            return res.res.status(500).send(err)
        }
    )   
})


router.get('/Customers', (req, res) => {
    CustomersData.find({},(err, customers_data) => {
            res.status(200).send(customers_data)
             console.log('req.body: ', customers_data);
        },
        (err) => {
            return res.res.status(500).send(err)
        }
    )   
})

router.get('/Navigation', (req, res) => {
    Navigation.find({},(err, navigation) => {
            res.status(200).send(navigation)
             console.log('req.body: ', navigation);
        },
        (err) => {
            return res.res.status(500).send(err)
        }
    )   
})

router.put('/members', (req, res) => {
    
    let Id =  req.body.userId;
    let totalTime = req.body.totalTime;
    let userName = req.body.userName
    var query = { "userId": Id };
    let opts = {
        upsert: true,
        new: true
      };

    UsersData.findOneAndUpdate(query,
        { $set: {"userName": userName, 'totalTime' : totalTime} }, 
        opts,

     function(err, template){
        if(err){
            console.log("Something wrong when updating data!"+ '</br>' + err);
        }else{
            res.status(200).send(template)
            console.log('body: ', template);
        }
    });  
})

module.exports = router