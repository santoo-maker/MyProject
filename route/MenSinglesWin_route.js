const express = require('express')
const router = express.Router()
const menWin = require('../model/MenSinglesWin_model')


router.post('/dashboard/players_entry/menssingles/Winner', function(req,res) {

    const PlayerFullName = req.body.PlayerFullName
    const PlayerSN = req.body.PlayerSN
    const PlayerRepresentation = req.body.PlayerRepresentation
    const PlayerSlot = req.body.PlayerSlot
    const Status = req.body.Status

    console.log(PlayerFullName, PlayerSN, PlayerRepresentation)

    const me = new menWin ({

        PlayerFullName : PlayerFullName,
        PlayerSN : PlayerSN,
        PlayerRepresentation : PlayerRepresentation,
        PlayerSlot : PlayerSlot,
        PlayerStatus : Status
    })

    console.log("me", me)

    me.save().then(function(result){
        res.json({
            message : "successfully added winner Player",
            PlayerSN : PlayerSN
        })
    }).catch(
        function(err){
            res.json({
                error : err,
                PlayerSN :PlayerSN
                
            })
        }
    )
})

router.post('/getMenSinglesPlayerWinner', function(req,res){

    const status = req.body.Status
    console.log("status", status)

    menWin.find({PlayerStatus : status})
    .then(data => {
        console.log("data1", data)
        res.json(data)
    })
    .catch(err => {
            res.status(500).json({
                error :err
            })
    })
})


router.put('/dashboard/players_entry/menssingles/WinnerUpdate', function(req,res){

    const slot = req.body.PlayerSlot
    const Status = req.body.Status
    console.log("slot", slot)

    menWin.findOneAndUpdate({PlayerSlot : slot}, {PlayerStatus : Status})
    .then(data => {
        console.log("data1", data)
        res.json({
            data : data,
            message : `Player ${slot} moved to ${Status}`
        })
    })
    .catch(err => {
            res.status(500).json({
                error :err
            })
    })
})

module.exports = router