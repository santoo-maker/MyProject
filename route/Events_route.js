const express = require('express')
const router = express.Router()
const events = require('../model/Events_model')


router.post('/addEvent', function(req, res){

    const GameTitle = req.body.GameTitle
    const Image = req.body.Image
    const Description = req.body.Description

    const me = new events ({

        GameTitle : GameTitle,
        Image : Image,
        Description : Description
    })

        me.save().then(function(result){
            res.json({
                message : "Event Added Successfully"
            })
        })
        .catch(function(err){
            res.json({
                message : "Fields Must not be Empty"
            })
        })

})

module.exports = router