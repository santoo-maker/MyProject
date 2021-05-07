const mongoose = require('mongoose')

const menWin = mongoose.model('MenSinglesWinner', {

    PlayerFullName : {
        type : String,
        required : true,
        unique : true
    },

    PlayerSN : {
        type : String,
        required : true,
        unique :  true

    },
    PlayerRepresentation : {
        type : String,
        required : true,
        unique : true
    },

    PlayerSlot : {
        type : Number,
        unique : true,
        required : true
    },

    PlayerStatus : {
        type : String
        
    }
  
})

module.exports = menWin