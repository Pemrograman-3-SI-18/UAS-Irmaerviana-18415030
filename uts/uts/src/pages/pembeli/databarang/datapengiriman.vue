<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-brown-1">
        <q-card flat class="bg-brown-1 q-pa-md">
      <span class="text-h5 text-weight-bold q-pa-md">
        <span class="text-blue-grey-14">Silahkan isi dengan lengkap</span>
      </span>

            <div class="q-pa-md">
                <q-form
                        class="q-gutter-md"
                >
                    <q-input
                            label="Nama lengkap"
                            lazy-rules
                            color="teal"
                            v-model="nama"
                            :rules="[
                            val => val !== null && val !== '' || 'Nama Anda Dibutuhkan'
                            ]">
                        <template v-slot:append>
                            <q-icon name="edit"/>
                        </template>
                    </q-input>

                    <q-input
                            label="Alamat"
                            lazy-rules
                            color="teal"
                            v-model="alamat"
                            :rules="[
                            val => val !== null && val !== '' || 'Alamat Dibutuhkan'
                            ]">
                        <template v-slot:append>
                            <q-icon name="nature"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Deskripsi Temapat"
                            lazy-rules
                            color="teal"
                            v-model="deskripsi"
                            :rules="[
                            val => val !== null && val !== '' || 'Isi dgn jelas'
                            ]">
                        <template v-slot:append>
                            <q-icon name="dehaze"/>
                        </template>
                    </q-input>
                    <q-input
                            label="E-mail"
                            lazy-rules
                            color="teal"
                            v-model="email"
                            :rules="[
                            val => val !== null && val !== '' || 'E-mail Aktiv Dibutuhkan'
                            ]">
                        <template v-slot:append>
                            <q-icon name="mail"/>
                        </template>
                    </q-input>

                    <q-input
                            label="No Telephone"
                            lazy-rules
                            color="teal"
                            v-model="no_telp"
                            :rules="[
                            val => val !== null && val !== '' || 'No Telephone Dibutuhkan'
                            ]">
                        <template v-slot:append>
                            <q-icon name="phone_iphone"/>
                        </template>
                    </q-input>

                    <q-input
                            label="Via Pengiriman"
                            lazy-rules
                            color="teal"
                            v-model="viapengiriman"
                            :rules="[
                            val => val !== null && val !== '' || 'No Telephone Dibutuhkan'
                            ]">
                        <template v-slot:append>
                            <q-icon name="redeem"/>
                        </template>
                    </q-input>
                    <div>
                        <q-btn
                                unelevated
                                icon="add"
                                label="Tambah Data Pembayaran"
                                style="height: 50px"
                                color="amber-5"/>
                    </div>
                </q-form>
            </div>
        </q-card>
    </q-page>
</template>

<script>
    export default {
        data () {
            return {
                nama: null,
                email: null,
                no_telp: null,
                alamat: null,
                deskripsi: null,
                viapengiriman: null
            }
        }
    }
</script>

<style scoped>

</style>