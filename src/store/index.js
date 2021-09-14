import { createStore } from 'vuex'
import axios from 'axios'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    getProducts(state){
      return state.products;
    },
    productAmount: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.productAmount
      else return null
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.amount), 0)
    }
  },
  mutations: {
    updateProductList(state, product){
      state.products.push(product);
    },
    addToCart (state, product) {
      let item = state.cart.find( i => i.id === product.id)
      if (item) {
        item.amount++
      } else {
        state.cart.push({...product, amount: 1})
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart (state, product) {
      let item = state.cart.find( i => i.id === product.id)

      if (item) {
        if (item.amount > 1) {
          item.amount--
        } else {
          state.cart = state.cart.filter( i => i.id !== product.id)
        } 
      }
      updateLocalStorage(state.cart)
    },
    deleteFromCart (state, product) {
      let item = state.cart.find( i => i.id === product.id)
      if (item) {
        state.cart = state.cart.filter( i => i.id !== product.id)
      }
      updateLocalStorage(state.cart)
    },
    updateFromCart(state, product) {
      let item = state.cart.find( i => i.id === product.id)
      console.log(item);
      updateLocalStorage(state.cart)
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    },
  },
  actions: {
    initApp({ commit }){
      return axios.get('https://nonchalant-fang.glitch.me/listing')
        .then( res => {
          let data = res.data
          this.state.products = []
          for (let key in data) {
            commit("updateProductList", data[key])
          }
        })
    },
    submitOrder ({ state, commit }, query) {
      console.log(state)
      console.log(commit),
      console.log(query)
      let dataQuery = {
        ...query.formData
      }
      console.log(dataQuery);
      return axios.post( 'https://nonchalant-fang.glitch.me/order', query)
        .then(res => {
          console.log(res)
        })
    }
  },
  modules: {
  }
})
