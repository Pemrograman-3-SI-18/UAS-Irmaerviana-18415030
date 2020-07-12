<template>
    <q-layout class="bg-blue-grey-1" view="hHr LpR lFf">
        <q-page-container>
            <q-page padding class="row items-center justify-center">
                <div class="row full-width">
                    <div class="col-md-8 offsett-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
                        <q-card flat class="bg-white text-black">
                            <div class="row">
                                <q-card-section class="text-blue-grey-14">
                                    <div class="text-h4">Registrasi</div>
                                    <div class="text-h8 text-amber-6">Belum punya akun ?
                                        Silahkan isi data dibawah</div>
                                </q-card-section>
                                <div class="col-md-12 col-xs-12 q-pt-md">
                                    <div class="q-pa-md">

                                        <q-form
                                                @submit="onSubmit"
                                                @reset="onReset"
                                                class="q-gutter-md"
                                        >
                                            <q-input
                                                    filled
                                                    v-model="form.username"
                                                    label="Silahkan Isi Username"
                                                    hint="Username"
                                                    lazy-rules
                                                    :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                                            />
                                            <q-input
                                                    filled
                                                    v-model="form.namalengkap"
                                                    label="Silahkan Isi Nama Lengkap"
                                                    hint="Nama Lengkap"
                                                    lazy-rules
                                                    :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                                            />

                                            <q-input
                                                    filled
                                                    v-model="form.email"
                                                    label="Silahkan Isi Email"
                                                    hint="Email"
                                                    lazy-rules
                                                    :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                                            />

                                            <q-input
                                                    filled
                                                    v-model="form.notelp"
                                                    label="Silahkan Isi No Telp"
                                                    hint="No Telp"
                                                    lazy-rules
                                                    :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                                            />

                                            <q-input
                                                    filled
                                                    v-model="form.pw"
                                                    label="Silahkan Isi Password"
                                                    hint="password"
                                                    lazy-rules
                                                    :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                                            />

                                            <div>
                                                <q-btn label="Registrasi" type="submit"  color="primary"/>
                                                <q-btn label="Login" to="/auth/login" color="primary" flat class="q-ml-sm" />
                                            </div>
                                        </q-form>

                                    </div>
                                </div>
                            </div>

                        </q-card>

                    </div>

                </div>

            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    export default {
        name: "Registrasi",
        data () {
            return {
               form: {
                   username: null,
                   namalengkap: null,
                   email: null,
                   notelp: null,
                   pw: null
               },
                accept: false
            }
        },

        methods: {
            onSubmit () {
                this.$axios.post('/pengguna/registrasi', {
                    username: this.form.username,
                    namalengkap: this.form.namalengkap,
                    email: this.form.email,
                    notelp: this.form.notelp,
                    role: '2',
                    pw: this.form.pw
                })
                    .then((res) => {
                        if (res.data.error){
                            this.$q.notify({
                                color:'negative',
                                message: res.data.msg,
                                icon: 'ion-close'
                            })
                        }else {
                            this.$q.notify({
                                color:'positive',
                                message: res.data.msg,
                                icon: 'ion-close'
                            })
                            this.$router.push('login')
                        }
                    })
        },

            onReset () {
                this.name = null
                this.age = null
                this.accept = false
            }
        }
    }
</script>

<style scoped>

</style>