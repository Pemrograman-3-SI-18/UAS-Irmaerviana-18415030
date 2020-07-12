const userModel = require('../model/User.js')
const response = require('../config/response')
const bcrypt = require('bcrypt')


exports.registrasi = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({username: data.username})
            .then(user =>{
                if  (user){
                    resolve(response.commonErrorMsg('Username sudah digunakan'))
                }else {
                    bcrypt.hash(data.pw, 10, (err, hash)=> {
                        if (err){
                            reject(response.commonErrorMsg)
                        } else {
                            data.pw = hash
                            userModel.create(data)
                                .then(()=> resolve(response.commonSuccessMsg('berhasil registrasi')))
                                .catch(()=> reject(response.commonErrorMsg('mohon maaf registrasi gagal')))
                        }
                    })
                }
            }).catch(()=> reject(response.commonError))
    })

exports.login = (data) =>
    new Promise((resolve, reject) => {
        userModel.findOne({
            username: data.username
        }).then(user => {
            if(user){
                if (bcrypt.compareSync(data.pw, user.pw)) {
                    resolve(response.commonResult(user))
                }else {
                    reject(response.commonErrorMsg('Password Salah'))
                }
            }else{
                reject(response.commonErrorMsg('Username Tidak di Temukan'))
            }
        })
    })