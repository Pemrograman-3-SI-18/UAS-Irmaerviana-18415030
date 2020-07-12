const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String
    },
    namalengkap: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: Number
    },
    notelp: {
        type: Number
    },
    pw: {
        type: String
    }
})

module.exports = mongoose.model('users', userSchema)
