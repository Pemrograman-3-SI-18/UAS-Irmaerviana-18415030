const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    kodebarang: {
        type: String
    },
    brand: {
        type: String
    },
    type: {
        type: String
    },
    garansi: {
        type: String
    },
    beratbeban: {
        type: String
    },
    harga: {
        type: String
    },
    stok: {
        type: String
    },
    gambar: {
        type: String
    }
})

module.exports = mongoose.model('msncuci', userSchema)
