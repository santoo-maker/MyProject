const express = require('express')
const router = express.Router()
const men = require('../model/MenSingles_model')


router.post('/dashboard/players_entry/menssingles', function(req,res) {

    const PlayerFullName = req.body.PlayerFullName
    const PlayerSN = req.body.PlayerSN
    const PlayerRepresentation = req.body.PlayerRepresentation

    console.log(PlayerFullName, PlayerSN, PlayerRepresentation)

    const me = new men ({

        PlayerFullName : PlayerFullName,
        PlayerSN : PlayerSN,
        PlayerRepresentation : PlayerRepresentation
    })

    me.save().then(function(result){
        res.json({
            message : "successfully added player"
        })
    })
})

module.exports = router