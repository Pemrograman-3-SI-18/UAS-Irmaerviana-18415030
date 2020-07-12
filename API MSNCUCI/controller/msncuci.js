const  msncuci = require('../model/msncuci.js')
const  response = require('../config/response')
const mongoose = require('mongoose')
const  ObjectId = mongoose.Types.ObjectId

exports.InputDataBarang = (data, gambar) =>
    new  Promise(async(resolve, reject) => {

      const msncucibaru = new msncuci({
          kodebarang : data.kodebarang,
          brand : data.brand,
          type : data.type,
          garansi : data.garansi,
          beratbeban : data.beratbeban,
          harga : data.harga,
          stok: data.stok,
          gambar : gambar
      })

       await msncuci.findOne({kodebarang: data.kodebarang})
            .then(msncuci => {
                if (msncuci){
                    reject(response.commonErrorMsg('kode barang sudah digunakan!!'))
                }else {
                    msncucibaru.save()
                        .then(r=>{
                            resolve(response.commonSuccessMsg('berhasil input barang'))
                        }).catch(err =>{
                        reject(response.commonErrorMsg('mohon maaf input barang gagal'))
                    })
                }
            }).catch(err => {
            reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
        })
    })

exports.lihatdatabarang = () =>
    new  Promise(async (resolve, reject) =>{
    await msncuci.find({})
      .then(result =>{
          resolve(response.commonResult(result))
      })
      .catch(()=>  reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami')))
})

exports.lihatdetaildatabarang = (kodebarang) =>
    new  Promise(async (resolve, reject) =>{
        await  msncuci.findOne({kodebarang: kodebarang})
            .then(result =>{
                resolve(response.commonResult(result))
            })
            .catch(()=>  reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami')))
    })

exports.updatemsncuci = (id, data, gambar) =>
    new  Promise(async (resolve, reject)=>{
        await msncuci.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodebarang: data.kodebarang,
                    brand: data.brand,
                    type: data.type,
                    garansi: data.garansi,
                    beratbeban: data.beratbeban,
                    harga: data.harga,
                    stok: data.stok,
                    gambar: gambar
                }
            }
        ).then(msncuci =>{
            resolve(response.commonSuccessMsg('berhasil ubah barang'))
        }).catch(err =>{
            reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
        })
    })

exports.hapusmsncuci = (_id)=>
    new Promise(async (resolve, reject)=>{
        await msncuci.remove({_id: ObjectId(_id)})
            .then(()=>{
                resolve(response.commonSuccessMsg('berhasil hapus barang'))
            }).catch(()=>{
                reject(response.commonErrorMsg('mohon maaf terjadi kesalahan pada server kami'))
            })
    })