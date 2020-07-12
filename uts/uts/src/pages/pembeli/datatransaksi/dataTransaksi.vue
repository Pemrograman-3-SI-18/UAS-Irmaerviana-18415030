<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="q-pa-md">
        <q-table
                title="Treats"
                :data="data"
                :columns="columns"
                row-key="id"
                :filter="filter"
                :loading="loading"
        >

            <template v-slot:top>

                <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
      </span>

                <q-space />
                <q-input borderless dense debounce="300" color="primary" v-model="filter">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>

        </q-table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                filter: '',
                rowCount: 10,
                columns: [
                    {
                        name: 'desc',
                        required: true,
                        label: 'Kode Transaksi',
                        align: 'left',
                        field: row => row.kodetrx,
                        format: val => `${val}`,
                        sortable: true
                    },
                    { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
                    { name: 'alamat', align: 'center', label: 'Alamat', field: 'alamat', sortable: true },
                    { name: 'brand', label: 'Brand', align: 'center', field: 'brand' },
                    { name: 'type', label: 'Type', align: 'center', field: 'type' },
                    { name: 'garansi', label: 'Garansi', align: 'center', field: 'garansi' },
                    { name: 'beratbeban', label: 'Berat Beban', align: 'center', field: 'beratbeban' },
                    { name: 'jumbeli', label: 'Jumlah Beli', align: 'center', field: 'jumbeli' },
                    { name: 'no_telp', align: 'center', label: 'No telphone', field: 'no_telp', sortable: true },
                    { name: 'kode_barang', label: 'Kode barang', align: 'center', field: 'kode_barang' },
                    { name: 'no_rek', label: 'No Rekening', align: 'center', field: 'no_rek' },
                    { name: 'harga', label: 'Harga', align: 'center', field: 'harga' },
                    { name: 'total', label: 'Total', align: 'center', field: 'total' },
                    { name: 'viapengiriman', label: 'Via Pengiriman', align: 'center', field: 'viapengiriman' }


                ],
                data: [
                    {
                        kodetrx: 'Trans001',
                        namapembeli: 'Shainan Hanafi',
                        alamat: 'Purworejo',
                        brand: 'SHARP',
                        type: 'ES-T77F',
                        garansi: '2th',
                        beratbeban: '7kg',
                        jumbeli: '1',
                        no_telp: '082378783212',
                        kode_barang: 'K01',
                        no_rek: '7476-98762-198',
                        harga: '1940000',
                        total:'1940000',
                        viapengiriman: 'JNT'
                    },
                    {
                        kodetrx: 'Trans002',
                        namapembeli: 'Denada Kusuma',
                        alamat: 'Pulosari',
                        brand: 'SANKEN',
                        type: 'TW-9880',
                        garansi: '1th',
                        beratbeban: '5kg',
                        jumbeli: '2',
                        no_telp: '082372123443',
                        kode_barang: 'K02',
                        no_rek: '2310-2039432-12',
                        harga: '1500000',
                        total:'3000000',
                        viapengiriman: 'JNE'
                    }
                ]
            }
        },

        methods: {
            // emulate fetching data from server
            addRow () {
                this.loading = true
                setTimeout(() => {
                    const
                        index = Math.floor(Math.random() * (this.data.length + 1)),
                        row = this.original[Math.floor(Math.random() * this.original.length)]
                    if (this.data.length === 0) {
                        this.rowCount = 0
                    }
                    row.id = ++this.rowCount
                    const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
                    this.data = [ ...this.data.slice(0, index), addRow, ...this.data.slice(index) ]
                    this.loading = false
                }, 500)
            },

            removeRow () {
                this.loading = true
                setTimeout(() => {
                    const index = Math.floor(Math.random() * this.data.length)
                    this.data = [ ...this.data.slice(0, index), ...this.data.slice(index + 1) ]
                    this.loading = false
                }, 500)
            }
        }
    }
</script>