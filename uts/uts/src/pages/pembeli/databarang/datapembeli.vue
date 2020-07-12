<template>
    <q-page>
        <div class="q-pa-md">
            <div class="row">
                <div class="col-md-4 col-xs-12 q-pa-md" v-for="(msncuci, i) in data" :key="i">
                    <q-card flat class="bg-white text-blue-grey-14">
                        <q-card-section>
                            <div class="text-h6">
                                {{ msncuci.brand}}
                                {{ msncuci.type}}
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <q-img spinner-color="white" style="height: 48%; max-width: 48%" :src="baseUrl + msncuci.gambar"/>
                        </q-card-section>
                        <q-card-section>
                            <div>
                                Harga : Rp. {{ msncuci.harga }}
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <div>
                                Garansi : {{ msncuci.garansi }}
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <div>
                                Berat Beban : {{ msncuci.beratbeban }}
                            </div>
                        </q-card-section>
                        <q-card-section>
                            <q-btn icon="add_shopping_cart" no-caps label="Tambah Ke Keranjang" type="submit" unelevated color="teal"  to="/pembeli/transaksi"/>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'datapembeli',
        data () {
            return {
                data: null,
                baseUrl: 'http://localhost:5050/gambar/'
            }
        },
        methods: {
            getDataMsnCuci () {
                this.$axios.get('/msncuci/databarang')
                    .then((res) => {
                        this.data = res.data.data
                    })
            }
        },
        mounted () {
            this.getDataMsnCuci()
        }
    }
</script>

<style scoped>

</style>
