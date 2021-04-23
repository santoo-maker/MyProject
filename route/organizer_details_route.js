const express = require('express')
const router = express.Router()
const organizer = require('../model/organizer_detail_model')


router.post('/createOrganizer', function(req,res){

    const Fullname = req.body.Fullname
    const Address = req.body.Address
    const Contact = req.body.Contact
    const Username = req.body.Username
    const Email = req.body.Email
    const Password = req.body.Password
})