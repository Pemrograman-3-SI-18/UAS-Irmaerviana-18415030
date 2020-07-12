import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
      meta: {
        auth: true
      },
    children: [
      { path: '', component: () => import('pages/admin/home/DataBarang.vue') },
      { path: 'inputdatabarangg', component: () => import('pages/admin/home/InputDataBarang.vue') },
      { path: 'editdatamsn/:id', component: () => import('pages/admin/home/editdatabarang.vue') },
      { path: 'datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') },
      { path: 'datapembeli', component: () => import('pages/admin/transaksi/dataPembeli.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/LayoutPembeli.vue'),
      meta: {
          auth: true
      },
    children: [
      { path: '', component: () => import('pages/pembeli/databarang/datapembeli.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/datatransaksi/dataTransaksi.vue') },
      { path: 'pembayaran', component: () => import('pages/pembeli/databarang/datapembayaran.vue') },
      { path: 'pengiriman', component: () => import('pages/pembeli/databarang/datapengiriman.vue') },
        { path: 'carapakai', component: () => import('pages/pembeli/prosedur/howtouse.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users//Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
