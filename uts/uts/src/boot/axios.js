import axios from  'axios'
import {async} from "q";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5050/'
})

export default async({Vue}) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }