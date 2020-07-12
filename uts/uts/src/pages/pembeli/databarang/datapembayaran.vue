<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-amber-1">
        <q-card flat class="bg-amber-1 q-pa-md">
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
                            <q-icon name="text_fields"/>
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
                            <q-icon name="museum"/>
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
                            <q-icon name="rate_review"/>
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
                            <q-icon name="local_phone"/>
                        </template>
                    </q-input>

                    <q-input
                            label="No Rekening"
                            lazy-rules
                            color="teal"
                            v-model="no_rek"
                            :rules="[
                            val => val !== null && val !== '' || 'No_rek Dibutuhkan'
                            ]">
                        <template v-slot:append>
                            <q-icon name="atm"/>
                        </template>
                    </q-input>


                    <div>
                        <q-btn
                                unelevated
                                icon="add"
                                label="Tambah Data Pembayaran"
                                style="height: 50px"
                                color="teal-6"/>
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
                alamat: null,
                email: null,
                no_telp: null,
                no_rek: null
            }
        }
    }
</script>

<style scoped>

</style>