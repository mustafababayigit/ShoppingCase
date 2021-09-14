<template>
  <div class="home">
    <div class="cart-container">
      <div class="card">
        <p class="length">
          My Cart ({{ products.length }})
        </p>
      </div>
      <CartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <div class="card">
        <div>
          <button 
            class="place-order-button"
            @click="submitOrder(products)"
          >
            PLACE ORDER
          </button>
        </div>
        <div>
          <button 
            class="cont-shopping" 
            @click="$router.push('/')"
          >
            <i class="arrow left" />
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
    <CartSummaryPaymentCard />
  </div>
</template>

<script>
import CartItemCard from "../components/cart/CartItemCard.vue";
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard.vue";

export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    submitOrder(model) {
      let myTarget = JSON.parse(JSON.stringify(model));
      if(myTarget.length) {
        this.$store.dispatch("submitOrder", {...this.query, order: myTarget, vm: this })
      }
    },
  },
};
</script>

<style lang="scss">
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    width: 100%;
    margin: 1px;
    padding: 1px;
    background-color: white;
    border-style: solid;
    border: gray;

    p.length {
      text-align: left;
      margin: 10px;
    }
  }
}

.cont-shopping {
  background: rgba(245, 241, 241, 0.753);
  color: black;
  font-family: Sans-serif;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  margin: 15px 15px;
  text-align: center;
  border: 0;
  transition: all 0.3s ease 0s;
  float: right;
  border-radius: 2px;
  cursor: pointer;
}

.place-order-button {
  background: rgb(245, 144, 66);
  color: #fff;
  font-family: Sans-serif;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  margin: 15px 15px;
  text-align: center;
  border: 0;
  transition: all 0.3s ease 0s;
  float: right;
  border-radius: 2px;
  cursor: pointer;
}

.arrow {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>