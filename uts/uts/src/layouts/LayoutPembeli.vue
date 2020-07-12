<template>
    <q-layout view="lHh Lpr lFf">

        <q-header class="bg-amber-5 text-blue-grey-6">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="left = !left" />
                <q-toolbar-title class="absolute-center">
                    <div class="text-white">
                        <div class="text-weight-bold"><marquee  direction="down" scrollamount="3">PENJUALAN MESIN CUCI</marquee>
                        </div>
                    </div>
                </q-toolbar-title>

                <q-toolbar-title></q-toolbar-title>
                <div class="text-white">Logout</div>

                <q-btn flat round dense icon="person" style="font-size: 20px;">
                    <q-menu>
                        <div class="row no-wrap q-pa-lg">
                            <div class="column">
                                <q-item-label class="text-h6">User</q-item-label>
                                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                                <div class="items-center">
                                    <div class="text-bold items-center">
                                       {{dataUser.username}}
                                    </div>
                                    <div class="text-bold items-center">
                                        {{dataUser.namalengkap}}
                                    </div>
                                </div>
                            </div>

                            <q-separator vertical inset class="q-mx-lg"></q-separator>

                            <div class="column items-center">
                                <q-btn flat round dense>
                                    <q-avatar size="72px">
                                        <img src="statics/icons/cw.jpeg">
                                    </q-avatar>
                                </q-btn>

                                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                                <q-btn
                                        color="black"
                                        label="Keluar"
                                        unelevated
                                        @click="keluar()"
                                        size="sm"
                                        v-close-popup>
                                    <q-tooltip>Keluar disini..</q-tooltip>
                                </q-btn>
                            </div>
                        </div>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="left"
                :breakpoint="500"
                show-if-above
                content-class="bg-white text-teal-10"
        >
            <q-scroll-area class="fit">
                <q-list>
                    <q-item style="height: 50px;" class="bg-amber-5 text-bold">
                        <q-item-section>
                          SELAMAT BERBELANA ONLINE
                            <q-item-section avatar>
                                <q-icon name="store" />
                            </q-item-section>

                        </q-item-section>
                    </q-item>
                    <q-item class="justify-center text-center q-mb-md q-pt-md">
                        <div>
                            <q-avatar size="100px" class="q-mb-md">
                                <img src="statics/icons/cw.jpeg" alt="">
                            </q-avatar>
                            <div class="text-weight-bold">
                                <marquee direction="right" scrollamount="3">{{dataUser.username}}</marquee>
                            </div>
                            <div class="text-weight-bold">
                                <marquee direction="left" scrollamount="3">{{dataUser.namalengkap}}</marquee>
                            </div>
                        </div>
                    </q-item>
                    <q-item-label
                            header
                            class="text-amber-8">
                       <div class="text-weight-bold"> BERANDA</div>
                    </q-item-label>
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli">
                        <q-item-section avatar>
                            <q-icon name="table_chart" />
                        </q-item-section>
                        <q-item-section>
                            <div class="text-weight-bold"> Produk</div>
                        </q-item-section>
                    </q-item>
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli/pembayaran">
                        <q-item-section avatar>
                            <q-icon name="local_atm" />
                        </q-item-section>
                        <q-item-section>
                            <div class="text-weight-bold"> Pembayaran</div>
                        </q-item-section>
                    </q-item>
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli/pengiriman">
                        <q-item-section avatar>
                            <q-icon name="directions_car" />
                        </q-item-section>
                        <q-item-section>
                            <div class="text-weight-bold"> Pengiriman</div>
                        </q-item-section>
                    </q-item>

                    <q-item-label
                            header
                            class="text-amber-8"
                    >
                        <div class="text-weight-bold"> TRANSAKSI</div>
                    </q-item-label>
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli/transaksi">
                        <q-item-section avatar>
                            <q-icon name="attach_money" />
                        </q-item-section>
                        <q-item-section>
                            <div class="text-weight-bold"> Data Transaksi</div>
                        </q-item-section>
                    </q-item>
                    <q-item-label
                            header
                            class="text-red">
                        <div class="text-weight-bold">PROSEDUR</div>

                    </q-item-label>
                    <q-item clickable active-class="active" exact v-ripple to="/pembeli/carapakai">
                        <q-item-section avatar>
                            <q-icon name="attach_money" />
                        </q-item-section>
                        <q-item-section>
                            HOW TO USE
                        </q-item-section>
                    </q-item>

                </q-list>
            </q-scroll-area>
        </q-drawer>
        <q-page-container class="bg-grey-2">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>

    export default {
        name: 'PembeliLayout',

        data () {
            return {
                left: false,
                dataUser: this.$q.localStorage.getItem('datauser')
            }
        },
        methods: {
            keluar (){
                this.$q.localStorage.clear()
                this.$router.push('auth/login')
            }
        }
    }
</script>