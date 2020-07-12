<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-page>
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
                <q-btn color="lime-7" icon="payment" icon-right="send" label="Tambah Data Barang" to="/inputdatabarangg"/>
                <q-space />
                <q-input borderless dense debounce="300" color="primary" v-model="filter">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>
                    <template v-slot:top>
                        <q-btn color="lime-7" icon="payment" icon-right="send" :disaable="loading" label="Tambah Data Barang" to="/inputdatabarangg"/>
                        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="remove"/>-->
                        <q-space />
                        <q-input borderless dense debounce="300" color="primary" v-model="filter">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                </q-input>
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="kodebarang" :props="props">
                        {{ props.row.kodebarang }}
                    </q-td>
                    <q-td key="brand" :props="props">{{ props.row.brand }}</q-td>
                    <q-td key="type" :props="props">{{ props.row.type }}</q-td>
                    <q-td key="garansi" :props="props">{{ props.row.garansi }}</q-td>
                    <q-td key="beratbeban" :props="props">{{ props.row.beratbeban }}</q-td>
                    <q-td key="harga" :props="props">{{ props.row.harga}}</q-td>
                    <q-td key="stok" :props="props">{{ props.row.stok }}</q-td>
                    <q-td key="gambar" :props="props">
                        <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
                    </q-td>
                    <q-td key="action" :props="props">
                        <div class="justify-center q-gutter-x-xs">
                            <q-btn color="teal"
                                   dense size="sm"
                                   class="q-px-xs"
                                   icon="edit"
                                   @click="edit(props.row.kodebarang)"
                                   label="Edit"></q-btn>
                            <q-btn
                                    color="red"
                                    dense
                                    size="sm"
                                    @click="hapusDataBarang(props.row._id)"
                                    class="q-px-xs"
                                    icon="delete"
                                    label="Hapus"></q-btn>
                        </div>
                    </q-td>
                </q-tr>
            </template>
        </q-table>
    </div>
</q-page>
</template>

<script>
    export default {
        data () {
            return {
                baseUrl: 'http://localhost:5050/gambar/',
                loading: false,
                filter: '',
                rowCount: 10,
                columns: [
                    {
                        name: 'kodebarang',
                        required: true,
                        label: 'Kode Barang',
                        align: 'left',
                        field: row => row.kodebarang,
                        format: val => `${val}`,
                        sortable: true
                    },
                    { name: 'brand', align: 'center', label: 'Brand', field: 'brand', sortable: true },
                    { name: 'type', align: 'center', label: 'Type', field: 'type' },
                    { name: 'garansi', label: 'Garansi', align: 'center', field: 'garansi' },
                    { name: 'beratbeban', label: 'Berat Beban', align: 'center', field: 'beratbeban' },
                    { name: 'harga', label: 'Harga', align: 'center', field: 'harga' },
                    { name: 'stok', label: 'Stok', align: 'center', field: 'stok' },
                    { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
                    { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true}
                ],
                data: []
            }
        },

        methods: {
            // emulate fetching data from server
            getDataBarang () {
                this.$axios.get('/msncuci/databarang')
                    .then((res) => {
                        this.data = res.data.data
                    })
            },
            hapusDataBarang(id){
                this.$axios.delete('/msncuci/hapus/' + id)
                .then((res)=>{
                    this.$q.notify({
                    color: 'positive', message: 'berhasil menghapus data'
                })
                this.getDataBarang()
                })
            },
            edit (kodebarang) {
                this.$router.push('/editdatamsn/' + kodebarang)
            }
        },
        mounted(){
            this.getDataBarang()
        }
    }
</script>