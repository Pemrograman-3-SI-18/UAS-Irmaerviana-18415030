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
        <span class="text-blue-grey-14">Data Pembeli</span>
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
                        label: 'User Name',
                        align: 'left',
                        field: row => row.username,
                        format: val => `${val}`,
                        sortable: true
                    },
                    { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
                    { name: 'alamat', align: 'center', label: 'Alamat', field: 'alamat', sortable: true },
                    { name: 'email', label: 'Email', align: 'center', field: 'email' },
                    { name: 'no_telp', align: 'center', label: 'No telphone', field: 'no_telp', sortable: true },
                    { name: 'password', label: 'Password', align: 'center', field: 'password' }


                ],
                data: [
                    {
                        username: 'Shainan123',
                        namapembeli: 'Shainan Hanafi',
                        alamat: 'Purworejo',
                        email: 'shainanhanafi@gmail.com',
                        no_telp: '082378783212',
                        password: 'basingdeh'
                    },
                    {
                        username: 'Denada20',
                        namapembeli: 'Denada Kusuma',
                        alamat: 'Purworejo',
                        email: 'denadakusuma@gmail.com',
                        no_telp: '082378783212',
                        password: 'semangka88'
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