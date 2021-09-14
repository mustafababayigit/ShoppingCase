<template>
  <div class="card">
    <div class="firstDiv">
      <img 
        :src="product.image" 
        width="70" 
        height="70"
      >
      <div class="amountDiv">
        <button 
          class="product-amount-button" 
          @click="removeFromCart(product)"
        >
          -
        </button>
        <input 
          v-model="amount" 
          class="amount" 
          ype="number" 
          min="1"
        >
        <button 
          class="product-amount-button" 
          @click="addToCart(product)"
        >
          +
        </button>
      </div>
    </div>
    <div class="secondDiv">
      <h4 class="name">
        {{ product.name }}
      </h4>
      <p class="price">
        {{ product.currency }} {{ product.price }}
      </p>
      <div class="test">
        <p 
          style="cursor:pointer" 
          @click="deleteFromCart(product)"
        >
          REMOVE
        </p>
      </div>
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
    data() {
        return {
            amount: this.product.amount
        }
    },
    watch: {
        amount(e) {
            if (e !== "") {
                let product2 = this.product
                product2.amount = e
                this.$store.commit('updateFromCart', product2)
            }
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('addToCart', product)
            this.amount = product.amount
        },
        removeFromCart(product) {
            this.$store.commit('removeFromCart', product)
            this.amount = product.amount
        },
        deleteFromCart(product) {
            this.$store.commit('deleteFromCart', product)
        }
    }
}
</script>

<style lang="scss">
    .cart-item-card {
        width: 85%;
        margin: 5%;
        background-color: white;
        box-shadow: 0 0 5px gray;
        border-radius: 5px;
        padding: 10px;
        text-align: left;

        .header {
            display: flex;
            justify-content: space-around;
        }
    }

    @media (min-width: 500px) {
        .cart {
            width: 350px;
        }
    }

    .card {
        width: 80%;
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

        .firstDiv {
            width: 40%;
            float: left;
            padding: 25px 0px 0px 0px;

            .amountDiv {
                display: flex;
                justify-content: center;
                height: 25%;
            }

            input.amount {
                margin: 0;
                display: block;
                width: 25%;
                text-align: center;
                margin: 0px 5px 0px 5px;
            }

            .test {
                text-align: right;
            }
        }

        .secondDiv {
            width: 60%;
            float: left;
            text-align: left;
        }
    }

    button.product-amount-button {
        // padding: 5px;
        // background-color: rgb(245, 144, 66);
        // border: none;
        // color: white;
        // font-weight: bold;
        border-radius: 50%;
        cursor: pointer;
        border: gray;
    }

    @media (min-width: 500px) {
        .card {
            width: 350px;
        }
    }
</style>