<template>
  <div class="home">
    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in getProducts"
        :key="product.id"
        :product="product" 
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    ProductSummaryCard,
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  mounted () {
    this.$store.dispatch("initApp")
  }
}
</script>

<style lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
