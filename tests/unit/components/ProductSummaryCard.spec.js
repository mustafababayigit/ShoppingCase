import { mount } from '@vue/test-utils'
import ProductSummaryCard from '@/components/products/ProductSummaryCard.vue'

// const localVue = createLocalVue()
// localVue.use(Vuex)
// const store = new Vuex.Store({})

describe('ProductSummaryCard.vue', () => {
    it('should list product', () => {
        const container = document.createElement('div')

        const wrapper = mount(ProductSummaryCard, {
            propsData: {
                product: {
                    "id": 1, "name": "Şampuan", "price": "13", "currency": "TRY"
                }
            }
        })
        expect(wrapper.propsData().product.length).to.equal(2)
    })
})