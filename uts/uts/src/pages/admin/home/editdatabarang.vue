<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <q-page padding class="items-center-justify-center bg-grey-3">
        <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Barang</span>
      </span>
            <div class="q-pa-md">
                <q-form
                        @submit="onSubmit"
                        class="q-gutter-md"
                >

                    <q-input
                            label="Kode Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.kodebarang"
                            :rules="[
           val => val !== null && val !== '' || 'Kode Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="code"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Brand Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.brand"
                            :rules="[
           val => val !== null && val !== '' || 'Jenis Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="merge_type"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Type Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.type"
                            :rules="[
           val => val !== null && val !== '' || 'Jumlah Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="account_balance_wallet"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Garansi Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.garansi"
                            :rules="[
           val => val !== null && val !== '' || 'Harga Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="beenhere"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Berat Beban Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.beratbeban"
                            :rules="[
           val => val !== null && val !== '' || 'Kode Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="today"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Harga Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.harga"
                            :rules="[
           val => val !== null && val !== '' || 'Kode Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="list_alt"/>
                        </template>
                    </q-input>
                    <q-input
                            label="Stok Barang"
                            lazy-rules
                            color="teal"
                            v-model="form.stok"
                            :rules="[
           val => val !== null && val !== '' || 'Kode Barang Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="code"/>
                        </template>
                    </q-input>
                    <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
                    <q-toggle v-model="gangtiGambar" label="Ganti Gambar ?" />
                    <q-input
                            lazy-rules
                            hint="Pilih gambar"
                            type="file"
                            ref="file"
                            v-if="gangtiGambar == true"
                            @input="selectFile()"
                            color="teal"
                            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
                        <template v-slot:append>
                            <q-icon name="add_photo_alternate"/>
                        </template>
                    </q-input>

                    <div>
                        <q-btn
                                unelevated
                                icon="add"
                                label="Ubah Data Barang"
                                style="height: 50px"
                                type="submit"
                                color="teal-6"/>
                    </div>
                </q-form>
            </div>
        </q-card>
    </q-page>
</template>

<script>
    export default {
        name: 'editdatabarang',
        data () {
            return {
                gangtiGambar: false,
                baseUrl: 'http://localhost:5050/gambar/',
                form: {
                    kodebarang: null,
                    brand: null,
                    type: null,
                    garansi: null,
                    beratbeban: null,
                    harga: null,
                    stok: null
                },
                id: null,
                gambar: null
            }
        },
        methods: {
            selectFile () {
                this.gambar = this.$refs.file.$refs.input.files[0]
            },
            onSubmit () {
                const formData = new FormData()
                formData.append('gambar', this.gambar)
                formData.append('kodebarang', this.form.kodebarang)
                formData.append('brand', this.form.brand)
                formData.append('type', this.form.type)
                formData.append('garansi', this.form.garansi)
                formData.append('beratbeban', this.form.beratbeban)
                formData.append('harga', this.form.harga)
                formData.append('stok', this.form.stok)
                this.$axios.put('/msncuci/ubah/' + this.id, formData)
                    .then((res) => {
                        if (res.data.error) {
                            this.$q.notify({
                                color: 'negative',
                                message: res.data.msg,
                                icon: 'ion-close'
                            })
                        } else {
                            this.$q.notify({
                                color: 'positive',
                                message: res.data.msg,
                                icon: 'ion-close'
                            })
                            this.$router.push('/')
                        }
                    })
            },
            getDataMsnById () {
                this.$axios.get('/msncuci/databarang/' + this.$route.params.id)
                    .then((res) => {
                        console.log(res)
                        this.data = res.data.data
                        this.form.kodebarang = this.data.kodebarang
                        this.form.brand = this.data.brand
                        this.form.type = this.data.type
                        this.form.garansi = this.data.garansi
                        this.form.beratbeban = this.data.beratbeban
                        this.form.harga = this.data.harga
                        this.form.stok = this.data.stok
                        this.gambar = this.data.gambar
                        this.id = this.data._id
                    })
            }
        },
        mounted () {
            this.getDataMsnById()
        }
    }
</script>

<style scoped>

</style>
