<template>
  <div class="card">
    <img 
      :src="product.image" 
      width="70" 
      height="70"
    >
    <h4 class="name">
      {{ product.name }}
    </h4>
    <div class="test">
      <p class="price">
        {{ product.currency }} {{ product.price }}
      </p>
      <button 
        class="view-product-button" 
        @click="addToCart(product)"
      >
        ADD BASKET
      </button>
    </div>
  </div>
</template>

 <script>
export default {
    props: {
        product: {
          type: [Array, Object],
          default: function () {
            return {  }
          } 
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit("addToCart", product);
            this.$router.push({ path: "/cart" });
        },
    },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  margin: 1px;
  padding: 25px 5px 5px 5px;
  // border-radius: 5px;
  background-color: white;
  border-style: solid;
  border: gray;
  // box-shadow: 0 0 5px gray;

  h4.name {
    color: gray;
  }

  p.price {
    color: gray;
  }
}

.test {
  display: flex;
  justify-content: space-around;
  height: 15%;
}

button.view-product-button {
  // padding: 5px;
  background-color: rgb(245, 144, 66);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
}

@media (min-width: 500px) {
  .card {
    width: 350px;
  }
}
</style>