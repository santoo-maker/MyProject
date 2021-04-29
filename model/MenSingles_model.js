const mongoose = require('mongoose')

const men = mongoose.model('MenSingles', {

    PlayerFullName : {
        type : String,
        required : true
    },

    PlayerSN : {
        type : String,
        required : true,
        unique :  true

    },
    PlayerRepresentation : {
        type : String,
        required : true
    }
  
})

module.exports = men