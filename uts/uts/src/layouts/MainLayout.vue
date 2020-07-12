<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-lime-7 text-blue-grey-3">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="absolute-center">
        <div class="text-white">
          <div class="text-weight-bold">
          <marquee direction="right" scrollamount="5" align="center">HALAMAN ADMIN</marquee>
          </div>
        </div>
        </q-toolbar-title>

        <q-toolbar-title></q-toolbar-title>
        <div class="text-white">Logout >></div>
        <q-btn outline flat color="primary" icon="person" class="q-mr-xs">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h8">My Account</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="cyan" style="height: 2px"/>
                <div class="items-center">

                  <div class="text-weight-bold">{{dataUser.username}}</div>
                  <div class="text-weight-bold">{{dataUser.namalengkap}}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="78px">
                    <img src="statics/icons/cw.jpeg"/>
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
          <q-item style="height: 50px;" class="bg-lime-7 text-bold style">
            <q-item-section>
               <q-item-label
                    header
                    class="text-white">
              <div class="text-weight-bold">DASHBOARD</div>
            </q-item-label>
            </q-item-section>

          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/icons/cw.jpeg" alt="">
              </q-avatar>
              <div class="text-weight-bold">{{dataUser.username}}</div>
              <div class="text-weight-bold">{{dataUser.namalengkap}}</div>
            </div>
          </q-item>

          <q-item-label
                  header
                  class="text-blue-grey-14">
            <div class="text-weight-bold">BERANDA</div>
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="add_shopping_cart" />
            </q-item-section>
            <q-item-section>
              Data Barang
            </q-item-section>
          </q-item>

          <q-item clickabAle active-class="active" exact v-ripple to="/inputdatabarangg">
            <q-item-section avatar>
              <q-icon name="payment" />
            </q-item-section>
            <q-item-section>
              Input Data Barang
            </q-item-section>
          </q-item>


          <q-item-label
                  header
                  class="text-grey-8">
            <div class="text-weight-bold">TRANSAKSI</div>

          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/datatransaksi">
            <q-item-section avatar>
              <q-icon name="attach_money" />
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/datapembeli">
            <q-item-section avatar>
              <q-icon name="attach_money" />
            </q-item-section>
            <q-item-section>
              Data Pembeli
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
    name: 'MainLayout',

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